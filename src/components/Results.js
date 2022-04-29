import styled from "styled-components"
import Axios from "axios"
import {useEffect, useState} from "react"

const Container = styled.div`
    margin:auto;
    width:50%;
    

`

const Row = styled.div`
    display:flex;
    background-color:#525558;
    margin-bottom: 4px;
    height:25px;
    width:100%;
    padding:3px;
    border-radius:4px;
    justify-content:center;
    align-items:center;
    
`

const T = styled.p`
    font-weight:bolder;
    color:#ff0000;
`
const Horario = styled.p`
    font-weight:bolder;
    color:#ccc;
`
const Div = styled.div`
    width:90%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    gap:20px;
    
`
const Equipo = styled.div`
    width:30%;
    height:25px;
    text-align:end;
`
const Equipo2 = styled.div`
    width:30%;
    height:25px;
    text-align:start;
`

const Score = styled.div`
    background-color:#5a5e62;
    width:70px;
    height:100%;
    padding:3px;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    
`
const G = styled.p`
    color:#07b236;
    font-weight:bolder;

`

const Results = () => {
    const [fixture, setFixture] = useState([])

    useEffect(() => {
        
            Axios.get("https://v3.football.api-sports.io/fixtures?live=all",{
                headers: {
                    'x-rapidapi-key': 'a90629b5a26bb63ced6f6ad86bf9f5d3',
                    'x-rapidapi-host': 'v3.football.api-sports.io'
                }
            })
            .then(res=> {
                console.log(res.data.response)
                setFixture(res.data.response)
            })
            .catch((err) => console.log(err));

    },[])

    return(
        <Container>
            <h1>Live Games</h1>
            {fixture.map((f,i) => (             
                <Row key={i++}><Horario>{f.fixture.date.slice(12,16)}</Horario> 
                    <Div>
                        <Equipo>
                            {f.teams.home.name}
                        </Equipo> 
                        <img src={`${f.teams.home.logo}`} alt="" width={25} height={25}/>
                        <Score>
                            <G>{f.goals.home} - {f.goals.away}</G>
                        </Score>
                        <img src={`${f.teams.away.logo}`} alt="" width={25} height={25}/>
                        <Equipo2>
                            {f.teams.away.name}
                        </Equipo2>
                    </Div>
                    <T>{f.fixture.status.elapsed}'</T>                    
                </Row>
            ))}         
            
        </Container>
    )
  }
  
  export default Results;
  