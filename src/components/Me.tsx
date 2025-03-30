import { FC } from "react";
import { useGetMe } from "../api/hooks/queries/use-get-me";

const Me: FC = () => {
    const {data, isLoading} = useGetMe();

    return <>
     <p style={{backgroundColor:'black'}}>{data?.firstName}</p>
     <p style={{backgroundColor:'black', color: 'white'}}>fda</p>
     </>
}

export default Me;