import styles from "./page.module.css";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(subject: string, name: string, version: string) {
  return { subject, name, version };
}

const rows = [
  createData("ライブラリ", "React", "19.0.0"),
  createData("フレームワーク", "Next.js", "15.1.3"),
  createData("UIライブラリ", "Material-UI", "6.3.0"),
];

export default function Home() {
  return (
    <Container>
      <Paper
        elevation={3}
        sx={{
          p: 5,
        }}
      >
        <h1 className={styles.title}>ようこそAokijuLaboへ!</h1>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          p: 5,
          mt: 5,
        }}
      >
        <h2>自己紹介</h2>
        <h3 style={{ lineHeight: 1.5 }}>
          <p>こんにちは！pperです！</p>
          <p>趣味はルービックキューブと将棋です！</p>
          <p>不定期更新ですが、気軽に見ていってくれたら嬉しいです！</p>
        </h3>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          p: 5,
          mt: 5,
        }}
      >
        <h2>このサイトについて</h2>
        <h3>
          <p>このサイトはpperがReactを練習するために作成しました。</p>
          <p>趣味や日常のことなどを不定期で更新しています。</p>
          <p>
            自分が持っている資格や制作物なども掲載しています。それぞれの資格や制作物の体験記も記載しています。
          </p>
          <p>定期的にデザインが変わったりすると思います。</p>
        </h3>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          p: 5,
          mt: 5,
        }}
      >
        <h2>使用しているライブラリなど</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>SDK</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Version</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.subject}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.version}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
