import {  
    Avatar,
    Container,
    Paper,
    Box,
} from "@mui/material";
import React from "react";
import pperImage from "./../image/pper.png";
import { Height } from "@mui/icons-material";

const PageOne = () => {
    return (
        <Container>
            <Paper
            elevation={3}
            sx={{
            p: 5,
            }}>
                <h1>自己紹介</h1>
            </Paper>
            <Paper
            elevation={3}
            sx={{
            p: 5,
            mt: 5,
            }}>
                <h2>プロフィール</h2>
                <Box sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    <Avatar src={pperImage.src} sx={{ width: 100, height: 100 }} />
                    <h2 style={{ marginLeft: '30px' }}>
                        名前：pper
                    </h2>
                </Box>
                <h2 style={{ marginLeft: '130px' }}>
                    <p>年齢：17歳</p>
                    <p>出身：静岡県</p>
                    <p>職業：高校生</p>
                    <p>好きなもの：和風・スチームパンク</p>
                    <p>好きなポケモン：クロバット・ハッサム</p>
                </h2>
            </Paper>
            <Paper
            elevation={3}
            sx={{
            p: 5,
            mt: 5,
            }}>
                <h2>趣味</h2>
                <h3 style={{ lineHeight: 1.5 }}>
                    <p>趣味はルービックキューブと将棋です！</p>
                    <p>ルービックキューブの最速タイム　12.95秒</p>
                    <p>使用しているルービックキューブ　XMD tornade v3 M Pioneer</p>
                    <p>将棋で使っている戦法　極限早繰り銀</p>
                    <p>将棋クエスト　7級　レート1352</p>
                </h3>
            </Paper>
        </Container>
    );
};

export default PageOne;
