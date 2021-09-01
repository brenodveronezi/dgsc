const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument({size: 'A4'});

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

// Embed a font, set the font size, and render some text
//doc.moveUp(8);
//doc
doc.fontSize(10)
//  .underline(100, 100, 450, 100, { color: '#000000' })

//  doc.text('', 200, 50)



doc.image('C:/projeto_delegacia/app/images/pmcv.png',{
    fit: [60, 120],
    align: 'left',
    valign: 'left',
})
.text(`
            SECRETARIA DE SEGURANÇA PÚBLICA                                                                         
            POLÍCIA CIVIL DO ESTADO DE SÃO PAULO
            DEINTER III
            SECCIONAL DE POLÍCIA DE SÃO CARLOS/SP
            Delegacia de Polícia de Investigações Gerais – DIG`
,140,75, {
    height: 120,
    width: 500,
    align: 'left',
    valign: 'top'
  }
  );

  //FAIXA DE CIMA
  doc.underline(55, 60, 490, 100, { color: '#000000' })
  //NOME
  doc.underline(220, 60, 325, 126, { color: '#000000' })
  //APELIDO
  doc.underline(220, 85, 325, 126, { color: '#000000' })
  //PAI
  doc.underline(220, 110, 325 , 126, { color: '#000000' })
  //MAE
  doc.underline(220, 135, 325 , 126, { color: '#000000' })
  //RG
  doc.underline(220, 162, 325 , 126, { color: '#000000' })
  //NATURALIDADE
  doc.underline(220, 187, 325 , 126, { color: '#000000' })
  //DATA DE NASCIMENTO
  doc.underline(220, 212, 325 , 126, { color: '#000000' })
  //ENDEREÇO
  doc.underline(220, 237, 325 , 126, { color: '#000000' })

  //FAIXA APÓS IMAGEM
  doc.underline(55, 328, 490, 100, { color: '#000000' })



  doc.fontSize(11)
doc.image('C:/projeto_delegacia/app/images/suspeito.png', 55, 170, {
    align: 'left',
    height: 250,
    width: 150
})

.text(`
        NOME:
        
        APELIDO:

        PAI:

        MÃE:
        
        RG:                                     | CPF:

        NATURALIDADE:

        DATA DE NASCIMENTO:

        ENDEREÇO:

        
`


, 200, 160, {
    height: 500,
    width: 400,
    align:'left'
});


//CUTIS
doc.text(`CUTIS:                              COR DOS OLHOS:                            TIPO DE CABELO:

`, 55, 440,  {
    height: 50,
    width: 700,
    align: 'left'
});

//COR DOS CABELOS
doc.text(`COR DOS CABELOS:                                                                 COMPRIMENTO:

`, 55, 465,  {
    height: 50,
    width: 700,
    align: 'left'
});

doc.text(`COMPLEIÇÃO:                              PESO:                                   ALTURA:

`, 55, 490,  {
    height: 50,
    width: 700,
    align: 'left'
});

doc.underline(55, 415, 490, 100, { color: '#000000' })

doc.text(`                                                              TATUAGENS:
`, 55, 520,  {
    height: 30,
    width: 700,
    align: 'left'
});

doc.underline(55, 435, 490, 100, { color: '#000000' })


doc.text(`
ROSTO:

COSTAS:

PEITO:

BARRIGA:

PERNA:

PÉ:

BRAÇO:

MÃO:
`, 55, 545,  {
    height: 350,
    width: 700,
    align: 'left'
});

doc.end()