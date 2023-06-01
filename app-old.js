const http = require('http');

http.createServer( (req, res )=>{

    //res.writeHead(200,{'content-Type':'application/json'})
    //res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    //res.writeHead( 200, { 'Content-Type':'application/csv'});

    res.write( 'Hola Mundo' );
    // res.write( '1, Fernando\n' );
    // res.write( '2, Maria\n' );
    // res.write( '3, Sergio\n' );
    // res.write( '4, Pedro\n' );
    res.end();
    
})
.listen( 8080 );

console.log('Escuchando en el puerto', 8080 );