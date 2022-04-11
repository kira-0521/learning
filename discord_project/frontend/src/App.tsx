import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {WebHookObject} from "./types/api/discord";
import {
    Button, Flex, FormLabel, Heading, Input, Stack, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";

function App() {
    const [channelId, setChannelId] = useState('');
    const [webhookName, setWebhookName] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure()

    // チャンネル名取得
    const getChannelName = async () => {
        await axios.get(`http://localhost:3008/discord/${channelId}/`).then(res => {
            setWebhookName(res.data.channelName)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        (async () => {
            if (!channelId) return
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
        <Flex direction='column' w='50%' mx='auto'>
            {
                isError ? (
                    <div style={{backgroundColor: '#cc2a27', textAlign: 'center'}}>
                        {message}
                    </div>
                ) : null
            }
            <Button colorScheme='teal' size='md' w={32} p={4} onClick={onOpen}>Add Webhook</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>Add Webhook</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Stack direction='column' spacing={4}>
                                <Box>
                                    <FormLabel htmlFor="webhookName">webhook名</FormLabel>
                                    <Input type="text" id="webhookName" value={webhookName}/>
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="webhookURL">webhookのURL</FormLabel>
                                    <Input type="text" id="webhookURL" onChange={onChangeWebhookUrl}/>
                                </Box>
                            </Stack>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost'>Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </Flex>
    )
}

export default App