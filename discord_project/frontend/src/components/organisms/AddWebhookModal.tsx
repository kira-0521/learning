import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import {ReactNode, VFC} from "react";

type Props = {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

export const AddWebhookModal: VFC<Props> = (props) => {
    const { children, onClose, isOpen } = props

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Add Webhook</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {children}
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
    )
}