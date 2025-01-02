import Icon from "./../image/pper.png";

export type TweetData = {
    text: string;  // ツイートの内容
    date: string;  // ツイートの日付
    imageUrl?: string;  // 画像URL（オプション）
};
/*
text: ツイート内容
date: ツイート日時
imageUrl: 画像
画像を添付したいときはimportしてその変数をimageUrlに渡す。
例：
import Icon from "./../image/pper.png";
{ text: "これ自分のアイコン！手作り也！", date: "2024-12-31",  imageUrl: Icon.src },
*/
export const Tweets: TweetData[] = [
    { text: "現在サイトを作成中！完成までもう少し！", date: "2025-01-02" },
    { text: "4日間夜中の2時に寝てるせいで、すこぶる体調が悪い", date: "2025-01-02" },  // 画像なし
    { text: "あけましておめでとう！今年の抱負は「昇華」です！自分の今までの努力が実を結べますように！", date: "2025-01-01" },
    { text: "これ自分のアイコン！手作り也！", date: "2024-12-31",  imageUrl: Icon.src },  // 画像あり
];

export const text = (tweet: string) => {
    return tweet; // tweet内容をそのまま返す
};
