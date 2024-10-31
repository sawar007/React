export default function Tabs({ children, button, ButtonContainter}) {

    return (
        <>
            <ButtonContainter>
                {button}
            </ButtonContainter>
            {children}</>

    )
}