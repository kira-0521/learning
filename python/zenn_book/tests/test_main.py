import pytest
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

from api.db import ASYNC_DB_URL, get_db, BaseModel
from api.main import app

ASYNC_DB_URL = "sqlite+aiosqlite:///:memory:"


@pytest.fixture
async def async_client() -> AsyncClient:
  # Async用のengineとsession
  async_engine = create_async_engine(ASYNC_DB_URL, echo=True)
  async_session = sessionmaker(autocommit=False, autoflush=False, bind=async_engine, class_=AsyncSession)
  
  # テスト用にオンメモリのSQLiteテーブルを初期化（関数ごとにリセット）
  async with async_engine.begin() as conn:
    await conn.run_sync(BaseModel.metadata.drop_all)
    await conn.run_sync(BaseModel.metadata.create_all)
  
  # DIを使ってFastAPIのDBの向き先をテスト用DBに変更
  async def get_test_db():
    async with async_session() as session:
      yield session
  
  # 開発用のdb取得用関数をテスト用の関数にオーバーライド
  app.dependency_overrides[get_db] = get_test_db
  
  # テスト用に非同期HTTPクライアントを返却
  async with AsyncClient(app=app, base_url="http://test") as client:
    yield client