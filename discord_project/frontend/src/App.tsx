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
    const [webhookUrl, setWebhookUrl] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const onChangeWebhookUrl = (e: ChangeEvent<HTMLInputElement>) => {
        setWebhookUrl(e.target.value)
    }

    const getChannelId = async () => {

        if (!webhookUrl) {
            // TODO:　バリデーション
            setIsError(true)
            setMessage("入力形式が正しくありません。")
            return
        }

        return await axios.get<WebHookObject>(webhookUrl).then(res => {
            // チャンネルID取得
            const chId = res.data.channel_id
            console.log(chId)
            return chId
        }).catch((err) => {
            setIsError(true)
            setMessage(err.message)
        })
    }

    useEffect(() => {
        (async() => {
            await getChannelId()
        })()
    }, [webhookUrl]);

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
                <label htmlFor="webhookURL">webhookのURLを入力してください。</label>
                <input type="text" id="webhookURL" value={webhookUrl}
                       onChange={onChangeWebhookUrl}/>
                <button>チャンネル登録</button>
            </div>
        </div>
    )
}

export default App