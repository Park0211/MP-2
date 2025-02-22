import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ChampionData, Champion } from './champion';


const Container = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
`;

const Title = styled.h1`       
    font-size: 2rem;
    color: #333;
`;

const List = styled.ul`
    width: 100%;
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    margin: 15px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
`;

const ChampionName = styled.h2`
    font-size: 1.5rem;
    color: #007bff;
`;

const ChampionImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 4px;
`;

const Explanation = styled.p`
    font-size: 1rem;
    color: #666;
`;

export default function ChampionsList(){
    const [champions, setChampions] = useState<Champion[]>([]);

    useEffect(() => {
        async function fetchChampions(): Promise<void> {
            const rawData = await fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json");
            const data: ChampionData = await rawData.json();
            setChampions(Object.values(data.data));
        }
        fetchChampions()
            .then(() => console.log("LeagueOfLegend Champions's data fetched successfully."))
            .catch((e: Error) => console.log("This was the error: " + e));
    }, [champions.length]);

    return (
        <Container>
            <Title>Champions</Title>
            <List>
                {champions.map(champion => (
                    <ListItem key={champion.id}>
                        <ChampionName>{champion.name} ({champion.title})</ChampionName>
                        <Explanation>{champion.blurb}</Explanation>
                        <ChampionImage src={'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/' + champion.image.full} alt={`${champion.name}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};
