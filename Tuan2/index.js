const express = require('express');
const app = express();

app.use(express.json({ extended: false }));
app.use(express.static('./views'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    const subjects = [
        { id: 1, name: "Cơ sở dữ liệu", type: "Cơ sở", semester: "HK1-2020-2021", faculty: "K.CNTT" },
        { id: 2, name: "Cấu trúc dữ liệu", type: "Cơ sở", semester: "HK1-2020-2021", faculty: "K.CNTT" },
        { id: 3, name: "Công nghệ phần mềm", type: "Cơ sở ngành", semester: "HK1-2020-2021", faculty: "K.CNTT" },
        { id: 4, name: "Công nghệ mới", type: "Chuyên ngành", semester: "HK1-2020-2021", faculty: "K.CNTT" },
        { id: 5, name: "Đồ án môn học", type: "Chuyên ngành", semester: "HK1-2020-2021", faculty: "K.CNTT" }
    ];

    res.render('index', { subjects });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
