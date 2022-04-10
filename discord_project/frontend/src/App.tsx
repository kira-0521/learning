import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {WebHookObject} from "./types/api/discord";

const flex = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const wrapper_style = {
    ...flex,
    paddingTop: '200px'
}

const form_style = {
    ...flex,
    flexDirection: 'column',
    gap: '30px'
}

function App() {
    const [channelId, setChannelId] = useState('');
    const [channelName, setChannelName] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    // チャンネル名取得
    const getChannelName = async () => {
        await axios.get(`http://localhost:3008/discord/${channelId}/`).then(res => {
            setChannelName(res.data.channelName)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        (async() =>{
            if(!channelId) return
            await getChannelName()
        })()
    }, [channelId]);

    // webhookURLの入力にトリガー
    const onChangeWebhookUrl = async (e: ChangeEvent<HTMLInputElement>) => {
        // webhookUrl
        const url = e.target.value as string

        // url正しくないとき TODO:　バリデーション
        if (!url) {
            setIsError(true)
            setMessage("入力形式が正しくありません。")
            return
        }

        return await axios.get<WebHookObject>(url).then(async (res) => {
            // チャンネルID取得
            const chId = res.data.channel_id
            setChannelId(chId)
        }).catch((err) => {
            setIsError(true)
            setMessage(err.message)
        })
    }

    return (
        <div style={wrapper_style}>
            {
                isError ? (
                    <div style={{backgroundColor: '#cc2a27', textAlign: 'center'}}>
                        {message}
                    </div>
                ) : (null)
            }
            <div style={form_style}>
                <h2>チャンネル名： {channelName}</h2>
                <label htmlFor="webhookURL">webhookのURLを入力してください。</label>
                <input type="text" id="webhookURL" onChange={onChangeWebhookUrl}/>
                <button>チャンネル登録</button>
            </div>
        </div>
    )
}

export default App