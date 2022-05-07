import { storage } from '../../firebaseInit'

/*

storageに保存 => 画像のurl取得

*/
export const getImageUrl = async (
  dirName: string,
  fileName: string,
  avatarImage: File
) => {
  const path = `${dirName}/${fileName}`

  await storage.ref(path).put(avatarImage)
  return await storage.ref(dirName).child(fileName).getDownloadURL()
}
