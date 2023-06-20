import { styled} from "styled-components";
import { color_black_medium } from "../UI/variables";
import Banner from "../Components/Banner/Banner";
import Carrousel from "../Components/Carrousel/Carrousel";

const StyledHome = styled.main`
    background-color: ${color_black_medium};

`

const Home = () => {
    return (
        <StyledHome>
            <Banner/>
            <Carrousel/>
            <Carrousel/>
            <Carrousel/>
        </StyledHome>
    )
}

export default Home;