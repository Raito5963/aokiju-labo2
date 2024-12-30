import React from 'react';
import { Card, CardContent, CardHeader, Avatar, IconButton, Typography, Divider } from '@mui/material';
import pperImage from './../image/pper.png';

type TweetCardProps = {
    tweet: string;  // tweet内容を受け取るプロパティ
};

{/* 
    --他のページでTweet内容を設定するには--
    import TweetCard from "./../_components/TweetCard";
    import { text } from "./../_components/tweet";
    const tweet = text("Tweet内容を記載");
    <TweetCard tweet={tweet} />
*/}

const TweetCard = ({ tweet }: TweetCardProps) => {
    return (
        <Card sx={{ maxWidth: 600, margin: '20px auto' }}>
            {/* ヘッダー部分：ユーザー情報 */}
            <CardHeader
                avatar={
                    <Avatar src={pperImage.src} />
                }
                title="pper"
                subheader="@pper_5963"
                sx={{ paddingBottom: 0 }}
            />

            {/* ツイート内容 */}
            <CardContent sx={{ paddingTop: 1 }}>
                <Typography variant="body1" component="p">
                    {tweet}  {/* tweetプロパティを表示 */}
                </Typography>
            </CardContent>
            <Divider />
        </Card>
    );
};

export default TweetCard;
