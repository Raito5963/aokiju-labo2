import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, Divider, Box, CardMedia } from '@mui/material';
import pperImage from './../image/pper.png';

type TweetCardProps = {
    tweet: string;  // tweet内容を受け取るプロパティ
    date: string;   // tweetの日付を受け取るプロパティ
    imageUrl?: string;  // 画像のURL（オプション）
};

const TweetCard = ({ tweet, date, imageUrl }: TweetCardProps) => {
    return (
        <Card sx={{ maxWidth: 600, margin: '2em auto' }}>
            {/* ヘッダー部分：ユーザー情報 */}
            <CardHeader
                avatar={<Avatar src={pperImage.src} />}
                title="pper"
                subheader={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ marginRight: 2 }}>
                            @pper_5963
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {date}
                        </Typography>
                    </Box>
                }
                sx={{ paddingBottom: 0 }}
            />

            {/* ツイート内容 */}
            <CardContent sx={{ paddingTop: 1 }}>
                <Typography variant="body1" component="p">
                    {tweet}  {/* tweetプロパティを表示 */}
                </Typography>
                
                {/* 画像が指定されている場合は表示 */}
                {imageUrl && (
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt="Tweet image"
                        sx={{ width: '100%', height: 'auto', marginTop: 2 }}
                    />
                )}
            </CardContent>
            <Divider />
        </Card>
    );
};

export default TweetCard;
