import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {WebHookObject} from "./types/api/discord";
import {
    Button, Flex, FormLabel, Input, Stack,
    useDisclosure, Box,
} from "@chakra-ui/react";
import {AddWebhookModal} from "./components/organisms/AddWebhookModal";

function App() {
    const [webhookUrl, setWebhookUrl] = useState('');
    const [webhookName, setWebhookName] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    // Modal用
    const {isOpen, onOpen, onClose} = useDisclosure()

    // url入力 TODO バリデーション
    const onChangeWebhookUrl = (e: ChangeEvent<HTMLInputElement>) => setWebhookUrl(e.target.value)
    // webhook名入力
    const onChangeWebhookName = (e: ChangeEvent<HTMLInputElement>) => setWebhookName(e.target.value)

    // チャンネル id & name ゲット
    useEffect(() => {
        (async () => {
            console.log('use effect')
            if (!webhookUrl) return
            await getChannelId().then(async (res: string | void) => {
                if (!res) return
                await getChannelName(res)
            })
        })()
    }, [webhookUrl]);

    // webhookURLの入力にトリガー
    const getChannelId = async (): Promise<string | void> => {
        return await axios.get<WebHookObject>(webhookUrl).then(async (res) => {
            // チャンネルID取得
            const chId = res.data.channel_id
            if (!chId) {
                // TODO: ちゃんと返ってこなかった時処理
                return
            }
            console.log('get channel id : ' + chId)
            return chId
        }).catch((err) => {
            console.log('err')
            setIsError(true)
            setMessage(err.message)
        })
    }

    // チャンネル名取得
    const getChannelName = async (chId: string): Promise<void> => {
        await axios.get(`http://localhost:3008/discord/${chId}/`).then(res => {
            const chName = res.data.channelName
            console.log('get channel name : ' + chName)
            setWebhookName(chName)
        }).catch(err => console.log(err))
    }

    return (
        <Flex direction='column' w='50%' mx='auto'>
            {
                isError ? (
                    <div style={{backgroundColor: '#cc2a27', textAlign: 'center'}}>
                        {message}
                    </div>
                ) : null
            }
            <Button colorScheme='teal' size='md' w={32} p={4} onClick={onOpen}>Add Webhook</Button>
            <AddWebhookModal onClose={onClose} isOpen={isOpen}>
                <Stack direction='column' spacing={4}>
                    <Box>
                        <FormLabel htmlFor="webhookName">webhook名</FormLabel>
                        <Input type="text" id="webhookName" value={webhookName}
                               onChange={onChangeWebhookName}/>
                    </Box>
                    <Box>
                        <FormLabel htmlFor="webhookURL">webhookのURL</FormLabel>
                        <Input type="text" id="webhookURL" onChange={onChangeWebhookUrl}/>
                    </Box>
                </Stack>
            </AddWebhookModal>
        </Flex>
    )
}

export default App