import { Inner, Container, BuyText } from './styles/buy';

export default function Buy({children, ...restProps}) {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Buy.Container = function({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Buy.BuyText = function({children, ...restProps}) {
    return <BuyText {...restProps}>{children}</BuyText>
}