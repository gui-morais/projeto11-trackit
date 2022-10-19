import styled from "styled-components"
import { DarkBlue } from "../consts/Colors"


export default function Header() {
    return(
        <Head>
            <Name>TrackIt</Name>
            <ProfilePhoto src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAArlBMVEX///8fXqHjHRpbgbOjstAAQZTP2uiasM3hAAAATZr0uroARJYAVJz52ACluNPxpaW1w9nH0uMASZgAUJvW1dSsvdZKda33+ft5mcLV2ufc5e/q7/XwnZ0AOpIpYqPm5eX//fX+9cs6bKiNpceDoMVSe7BtjrrjEw/nV1b74uHv7+7+99X++ub++N764FD8533742f75XL+9MD98bL97Z376YwAGIgAI4rlREPnT05tDc/gAAAE10lEQVRoge2YC3ebOBBGhyWGqMgUkHlJazvBQJpX46Sbffz/P7YzYCeAobvh4bbncM9JHEVG1/osRgDAzMzMzMzMzE9NeNfd952uwWxX3X2r7VTW8G612t6FrV3hdrVq7xoMWonWaW3LvmmyvuvUHsRTfcU0dkeWxWeaSBuuttuuOW2pbyIvnSpdZ1IYTnsmnZn7h2rr4bHWV2s91lpD+fpUbe2fa3211vN+POvVy3L5cvU/WlfU+nYF4/C8LPijbO3L1mvZeq21nsrWU/s4H+apMnSz9XraGksLDzTa28p6pFZH30Otbygvy/3X5f2xdb/c75ePlb59o+++eXxfvl3j+NfH1vV1+XPwUuulvW/m50ZeDEP29DoeW/SHeW5vr2n0x+zvtZyeR5ZH/4peR9f1LAY/C1JVNCKpdCIHQ9dx5Zi6gSsww3fZO/p/CpDqUTjU63tJrkvXClKRgc2SjG9kEHAt0CESYgf4G4ePF/guP02CBN8FjAs13GvjX7onIRex7zn4IkGxAP+ZBAG+RLzw7spDdvh2w8uZM9xrhgoSEULK0OuDjnOR5JXCTPEzHLxRqDBblzp2C6nlg71CrP+EhJdeniTch9LrLyQNXXo9sf4LOwKO3/gmgSAJB883Mtw3r9AjjkMWXn2jJIuO880NV4G5MPGS1opgx+RQr0Xfb8bIa1DOGQ5J3lDjjHGt+v1KntFRQjAh7MFenAIuFycMuKJFlrO48Loid12dyVSz49i1IiVDnTlKqpT5rs31gV57TV7F+cZLsWGDvjZArhOI1rhmzfVFxBF/jZOMNngCCU1jmPWGq2Fe6cf0p7RNHEX6EmJfQei74Dq4fpVvxA4i6ZfhlJAOe3/NOvlDvCw3+5Oz3l6R6f0JRF+vYeU9jyQSq+91DkRYNMILu50LBbefu8DNEM+7vigN623k8VYWBny67OB3MMRmwGMll+kQJlorjLy/tXHzDx7Ejf5aTJr2U/ZB7+UtprwbogW10WiL/ZD38jMW72DgwztKGjYf8d78jSmLQSkTlLTblnSXF1OOPHOoFtc0Xti0Jd3hxbXssmSER6R4LdmadLsXUwaNxcO1VAFMME4n3O4dKWUi1DwF6Ym41Uspe8koWkzay1qqR5v38gtearDedbkJ1Wm3OeE2783wilFDwwv0ZtIt3lFTJpyWOn3qvfkySsWoElk+bjH/4S3W8ogpQ3Fh2kz6xFukHIyqpTqdNapH00u7H326kaE6HXvf8WLKuTVOxaiCO3l9R2x4cfej1Tc+RdKd86XdTxOj1OUmVHcra7rupZRHqstN8Nys7og1b7GWs0m0UJwl4abNS2uZj1eXm1D1eKvTNe94u18rGsMdUZx4J6kYVQzrfUd8915iypqlJvRiZbCPa/rdO3XKcKjTO1HzUsWYbC0feb9zOXpx91MT1OUmxZ2LqHiL3c+eWlvWaUr64J2sLjfBe59iRyy9lLKmTZ4yUdRpdvBOWJebFEmnvPBixXC8c6RMGBZeM2oeeXH3Y2LSilFlR0mvyXsLuuefS4vVA+9cIhc+YcrWuVImYtwFlIRbUPx8KROpVVaK/IwpF9CdC5yhLjcprvKUxs+aMkFJnz1loDWt7di5UyYMwbWzp0zsBj0W74/q/8B1ZmZmZmZm5kfwL4A+ezMzranJAAAAAElFTkSuQmCC' alt="Não foi possível carregar a imagem" />
        </Head>
    )
}

const Head = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${DarkBlue};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
`;

const Name = styled.h1`
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: white;
    margin-left: 18px;
`;

const ProfilePhoto = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin-right: 18px;
`;