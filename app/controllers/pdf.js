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

    
      //FAIXA APÓS IMAGEM
      doc.underline(55, 316, 490, 100, { color: '#000000' })
    
      //NOME
      doc.rect(220, 159, 325, 26).stroke();


      //APELIDO
      doc.rect(220, 185, 325, 25).stroke();

      //PAI
      doc.rect(220, 210, 325, 25).stroke();

      //MAE
      doc.rect(220, 235, 325, 25).stroke();

      //RG
      doc.rect(220, 260, 325, 25).stroke();

      //NATURALIDADE
      doc.rect(220, 285, 325, 26).stroke();

      //DATA DE NASCIMENTO
      doc.rect(220, 311, 325, 25).stroke();

      //ENDERECO
      doc.rect(220, 336, 325, 79).stroke();

      //COR OLHOS
      doc.rect(55, 430, 245, 25).stroke();
      
      //TIPO DE CABELO
      doc.rect(300, 430, 245, 25).stroke();
    
      //COR DOS CABELOS
      doc.rect(55, 455, 245, 25).stroke();
      
      //
      doc.rect(300, 455, 245, 25).stroke();

      //PESO
      doc.rect(55, 480, 245, 25).stroke();
      
      //ALTURA
      doc.rect(300, 480, 245, 25).stroke()      



      doc.fontSize(11)
    doc.image('C:/projeto_delegacia/app/public/images/' + usuario.foto_principal + '.png', 65, 170, {
        align: 'left',
        height: 230,
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
    doc.text(`    COR DOS OLHOS: ` + usuarioC.cor_olhos + `                                    TIPO DE CABELO: ` + usuarioC.tipo_cabelo + `
    
    `, 55, 440,  {
        height: 50,
        width: 700,
        align: 'left'
    });
    
    //COR DOS CABELOS
    doc.text(`    COR DOS CABELOS: ` + usuarioC.cor_cabelo + `
    
    `, 55, 465,  {
        height: 50,
        width: 700,
        align: 'left'
    });
    
    doc.text(`    PESO: ` + usuarioC.peso + `                                                   ALTURA: ` + usuarioC.altura + `
    
    `, 55, 490,  {
        height: 50,
        width: 700,
        align: 'left'
    });
    
    //doc.underline(55, 415, 490, 100, { color: '#000000' })
    
    doc.text(`                                                                    TATUAGENS:
    `, 55, 525,  {
        height: 30,
        width: 700,
        align: 'left'
    });
    
    //doc.underline(55, 435, 490, 100, { color: '#000000' })
    
    
    //doc.underline(55, 475, 490, 100, { color: '#000000' })

    //ROSTO / PESCOCO
    doc.rect(55, 550, 245, 25).stroke() 

    doc.rect(300, 550, 245, 25).stroke()  

    //COSTAS
    doc.rect(55, 575, 245, 25).stroke() 

    doc.rect(300, 575, 245, 25).stroke()  

    //PEITO
    doc.rect(55, 600, 245, 25).stroke() 

    doc.rect(300, 600, 245, 25).stroke()  

    //BARRIGA
    doc.rect(55, 625, 245, 25).stroke() 

    doc.rect(300, 625, 245, 25).stroke()  
    
    //PERNA
    doc.rect(55, 650, 245, 25).stroke() 

    doc.rect(300, 650, 245, 25).stroke() 

    //PE
    doc.rect(55, 675, 245, 25).stroke() 

    doc.rect(300, 675, 245, 25).stroke() 

    //BRACO
    doc.rect(55, 700, 245, 25).stroke() 

    doc.rect(300, 700, 245, 25).stroke() 

    //ANTEBRACO
    doc.rect(55, 725, 245, 25).stroke() 

    doc.rect(300, 725, 245, 25).stroke() 

    //MAO
    doc.rect(55, 750, 245, 25).stroke() 

    doc.rect(300, 750, 245, 25).stroke() 

    //CICATRIZ / DEFORMIDADE
    doc.rect(55, 775, 245, 25).stroke() 

    doc.rect(300, 775, 245, 25).stroke() 


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

    doc.rect(doc.x, 45, 490, 780).stroke();
    
    
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
    
    // OCORRENCIA / DATA
    doc.rect(55, 117, 245, 33).stroke() 

    doc.rect(300, 117, 245, 33).stroke() 

    doc.text(`
    OCORRÊNCIA: ` + passagens.artigo1 + passagens.lei1 + `
    
    HISTÓRICO: ` + passagens.procedimento1 + `
    `, 55, 118, {
        height: 200,
        width: 400,
        align: 'left'
    })
    
    doc.text(`
    DATA: ` + passagens.data1 + `
    `, 300, 118, {
        height: 200,
        width: 400,
        align: 'left'
    })
    doc.rect(55, 89, 490, 120).stroke();
    
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