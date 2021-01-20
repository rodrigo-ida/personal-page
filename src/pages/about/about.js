import styled from 'styled-components'
import Sun from '../../assets/svg/sun/sun'

const StyledAbout = styled.main`

width: 100%;
height: 100%;

.about-me_text-wrapper{
    background-color: white;
    position: relative;
    top: 200px;
    left: 280px;
    height: 500px;
}
    



`


const About = ()=>{

    return (
        <StyledAbout>
            <div className="about-me_text-wrapper">
                <h1>
                    Sobre Mim
                </h1>
            </div>
            <Sun/>
        </StyledAbout>
    )
}

export default About