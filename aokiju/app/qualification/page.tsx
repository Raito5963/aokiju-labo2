import React from "react";
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

function createData(name: string, date: string) {
    return { name, date };
}

const rows = [
    createData("危険物乙1類", "2024/1/1"),
    createData("危険物乙3類", "2024/1/1"),
    createData("危険物乙4類", "2024/1/1"),
    createData("危険物乙5類", "2024/1/1"),
    createData("危険物乙6類", "2024/1/1"),
    createData("工事担任者デジタル2級", "2024/1/1"),
    createData("漢字検定準2級", "2024/1/1"),
    createData("英語検定3級", "2024/1/1"),
    createData("ワープロ検定2級", "2024/1/1"),
    createData("表計算検定1級", "2024/1/1"),
    createData("情報技術検定1級", "2024/1/1"),
];

const Page2 = () => {
    return (
        <Container>
            <Paper
                elevation={3}
                sx={{
                    p: 5,
                }}
            >
                <h1>資格・検定</h1>
            </Paper>
            <Paper
                elevation={3}
                sx={{
                    p: 5,
                    mt: 5,
                }}
            >
                <h2>取得した資格・検定一覧</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">資格名</TableCell>
                                <TableCell align="center">獲得日</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="left">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};

export default Page2;