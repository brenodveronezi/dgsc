module.exports.pdf = function(application, res, result, resultC, resultE, resultP, resultT, resultCT){
    var usuario = result[0];
    var usuarioC = resultC[0];
    var tatuagem = resultCT[0];
    var enderecos = resultE[0];
    var passagens = resultP[0];



    const PDFDocument = require('pdfkit');
    const fs = require('fs');
    
    
    // Create a document
    const doc = new PDFDocument({size: 'A4'});
    
    // Pipe its output somewhere, like to a file or HTTP response
    // See below for browser usage
    doc.pipe(fs.createWriteStream("C:/projeto_delegacia/app/public/pdf/" + usuario.id + ".pdf"));
    
    // Embed a font, set the font size, and render some text
    //doc.moveUp(8);
    //doc
    doc.fontSize(10)
    //  .underline(100, 100, 450, 100, { color: '#000000' })
    
    //  doc.text('', 200, 50)
    
    
    
    doc.image('C:/projeto_delegacia/app/public/images/pmcv.png',{
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
    doc.image('C:/projeto_delegacia/app/public/images/' + usuario.foto_principal + '.png', 55, 170, {
        align: 'left',
        height: 250,
        width: 150
    })
    
    .text(`
            NOME: `+ usuario.nome +`
            
            APELIDO: `+ usuario.apelido +`
    
            PAI: `+ usuario.nome_pai +`
    
            MÃE: `+ usuario.nome_mae + `
            
            RG: `+ usuario.rg + `                              | CPF: `+ usuario.cpf + `
    
            NATURALIDADE: `+ usuario.naturalidade + `
    
            DATA DE NASCIMENTO: `+ usuario.dt_nascimento + `
    
            ENDEREÇO: `+ enderecos.rua1 + enderecos.cidade1 + enderecos.estado1 + enderecos.complemento1 + `
    
            
    `
    
    
    , 200, 160, {
        height: 500,
        width: 400,
        align:'left'
    });
    
    
    //CUTIS
    doc.text(`COR DOS OLHOS: ` + usuarioC.cor_olhos + `                          TIPO DE CABELO: ` + usuarioC.tipo_cabelo + `
    
    `, 55, 440,  {
        height: 50,
        width: 700,
        align: 'left'
    });
    
    //COR DOS CABELOS
    doc.text(`COR DOS CABELOS: ` + usuarioC.cor_cabelo + `                                                               COMPRIMENTO:
    
    `, 55, 465,  {
        height: 50,
        width: 700,
        align: 'left'
    });
    
    doc.text(`COMPLEIÇÃO:                              PESO: ` + usuarioC.peso + `                                  ALTURA: ` + usuarioC.altura + `
    
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
    ROSTO: ` + tatuagem.txtrosto + `                                                                             
    
    COSTAS (direita): ` + tatuagem.txtcostas_d + `                                                            
    
    PEITO (direita): ` + tatuagem.txtpeito_d + `                                                     
    
    BARRIGA (direita): ` + tatuagem.txtbarriga_d + `                                                            
    
    PERNA (direita): ` + tatuagem.txtperna_d + `                                                                 
    
    PÉ (direita): ` + tatuagem.txtpe_d + `                                                                      
    
    BRAÇO (direita): ` + tatuagem.txtbraco_d +  `

    ANTEBRAÇO (direita) : ` + tatuagem.txtantebraco_d + `                                                            
    
    MÃO (direita): ` + tatuagem.txtmao_d + `
    
    CICATRIZ: ` + tatuagem.txtcicatriz + `
    `, 55, 545,  {
        height: 500,
        width: 400,
        align: 'left'
    });
    
    
    doc.text(`
    PESCOÇO: ` + tatuagem.txtpescoco_e + `
    
    COSTAS (esquerda): ` + tatuagem.txtcostas_e + `
    
    PEITO (esquerda): ` + tatuagem.txtpeito_e + `
    
    BARRIGA (esquerda): ` + tatuagem.txtbarriga_e + `
    
    PERNA (esquerda): ` + tatuagem.txtperna_e + `
    
    PÉ (esquerda): ` + tatuagem.txtpe_e + `
    
    BRAÇO (esquerda): ` + tatuagem.txtbraco_e + `

    ANTEBRAÇO (esquerda) : ` + tatuagem.txtantebraco_e + `     
    
    MÃO (esquerda): ` + tatuagem.txtmao_e + `

    DEFORMIDADE: ` + tatuagem.txtdeformidade + `
    `, 320, 545,  {
        height: 500,
        width: 300,
        align: 'left'
    });
    
    doc.addPage();
    
    doc.underline(55, -10, 490, 100, { color: '#000000' })
    
    doc.text(`                                                                  PASSAGENS
    `, 60, 100, {
        height: 50,
        width: 700,
        align: 'left'
    })
    
    doc.underline(55, 18, 490, 100, { color: '#000000' })
    
    doc.text(`
    OCORRÊNCIA: ` + passagens.artigo1 + passagens.lei1 + `
    
    HISTÓRICO: ` + passagens.procedimento1 + `
    `, 55, 120, {
        height: 200,
        width: 400,
        align: 'left'
    })
    
    doc.text(`
    DATA: ` + passagens.data1 + `
    `, 425, 120, {
        height: 200,
        width: 400,
        align: 'left'
    })
    
    
    doc.end()


    var pdf = "C:/projeto_delegacia/app/public/pdf/" + usuario.id + ".pdf"

setTimeout(() =>     fs.readFile(pdf, function (err, data){

                    res.contentType("application/pdf");
                    if(err){
                        console.log(err);
                    }
                    res.send(data);

                }), 5000);
}