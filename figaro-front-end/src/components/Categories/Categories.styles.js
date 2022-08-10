import styled from "styled-components";
import { mediumTablet } from "../../responsive";


export const Container = styled.div`
    display: flex;
    padding: 1.25rem;
    justify-content: space-between;

    ${ mediumTablet({ padding: 0, flexDirection: "column" })}

`