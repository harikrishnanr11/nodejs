import http from 'http';
import url from 'url';

const Students = [
    { name: 'Athul', age: 20, grade: 'A' },
    { name: 'Hari', age: 21, grade: 'B' },
    { name: 'Kiran', age: 22, grade: 'A+' },
    { name: 'Rukrish', age: 23, grade: 'C' }
];
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/Students') {
        const queryName = parsedUrl.query.name;
        const student = Students.find(s => s.name.toLowerCase() === queryName.toLowerCase());
        if (student) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end( ` Student Name : ${student.name}\n` +
                ` Student Age : ${student.age}\n `+
               ` Student Grade : ${student.grade}\n` );
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Student Not Found');
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(' Page Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/Students?name=Hari');
});