import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./style.scss";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideoSection from "./videoSection/VideoSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
    const { mediaType, id } = useParams();
    const { data: videosData, loading: videosLoading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: creditsData, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

    return (
        <div>
            <DetailsBanner video={videosData?.results?.[0]} crew={creditsData?.crew} />
            {creditsData?.cast?.length > 0 && (
                <Cast data={creditsData.cast} loading={creditsLoading} />
            )}
            {videosData?.results?.length > 0 && (
                <VideoSection data={videosData} loading={videosLoading} />
            )}
            {mediaType && id && (
                <>
                    <Similar mediaType={mediaType} id={id} />
                </>
            )}
            <Recommendation mediaType={mediaType} id={id} />
        </div>
    );
};

export default Details;
