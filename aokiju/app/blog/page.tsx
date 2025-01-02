import { Box, Paper, Container } from "@mui/material";
import React from "react";
import TweetCard from "./../_components/TweetCard";
import { Tweets } from "./../_components/tweet";  // tweet.ts からデータをインポート


//新しくTweetを追加したいなら"_components/tweet.ts"に追加してね！

const PageOne = () => {
    return (
        <>
            <Container>
                <Paper
                    elevation={3}
                    sx={{
                        p: 5,
                    }}>
                    <h1>ブログ</h1>
                    <h2>Tweet風に日々のことを上げています</h2>
                    <h3>そのうち「いいね」とか「コメント」とか実装したいね</h3>
                </Paper>
                <Paper
                    elevation={3}
                    sx={{
                        p: 5,
                        mt: 5,
                    }}>
                    {/* Tweets 配列をループして TweetCard を表示 */}
                    {Tweets.map((tweetData, index) => (
                        <TweetCard
                            key={index}
                            tweet={tweetData.text}
                            date={tweetData.date}
                            imageUrl={tweetData.imageUrl}  // 画像URLを渡す
                        />
                    ))}
                </Paper>
            </Container>
        </>
    );
};

export default PageOne;
