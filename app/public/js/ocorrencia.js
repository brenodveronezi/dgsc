function addOcorrencia() {
    const div = document.createElement('div');
    var x = document.getElementsByClassName('oc');
    console.log(x.length);

    if(x.length == 1){
    div.innerHTML = `

        <div class="row div-form">
            <div style="width: 100%;"><input class="oc" readonly type="text" value="Ocorrência 2">
                <p><input name="date2" type="date"></p>
            </div>

            <div style="width: 100%;">
                <p><input name="procedimento2" placeholder="Procedimento" ></p>
            </div>

            <div style="width: 100%;">
                <p><input name="artigo2" placeholder="Artigo" ></p>
            </div>

            <div style="width: 100%;">
                <p><input name="lei2" placeholder="Lei" ></p>
            </div>

            <div style="width: 100%;">
                <p><input name="historico2" type="textarea" placeholder="Histórico" ></p>
            </div>
        </div>

        <input type="button" value="Remover ocorrência 2" onclick="removeOcorrencia(this)" />
    `;
    }

    if(x.length == 2){
    div.innerHTML = `

        <div class="row div-form">
            <div style="width: 100%;"><input class="oc" readonly type="text" value="Ocorrência 3">
                <p><input name="date3" type="date"></p>
            </div>

            <div style="width: 100%;">
                <p><input name="procedimento3" placeholder="Procedimento" ></p>
            </div>

            <div style="width: 100%;">
                <p><input name="artigo3" placeholder="Artigo" ></p>
            </div>

            <div style="width: 100%;">
                <p><input name="lei3" placeholder="Lei" ></p>
            </div>

            <div style="width: 100%;">
                <p><input name="historico3" type="textarea" placeholder="Histórico" ></p>
            </div>
        </div>

        <input type="button" value="Remover ocorrência 3" onclick="removeOcorrencia(this)" />
    `;
    }

    if(x.length == 3){
    div.innerHTML = `

        <div class="row div-form">
            <div style="width: 100%;"><input class="oc" readonly type="text" value="Ocorrência 4">
                <p><input name="date4" type="date"></p>
            </div>

            <div style="width: 100%;">
                <p><input name="procedimento4" placeholder="Procedimento" ></p>
            </div>

            <div style="width: 100%;">
                <p><input name="artigo4" placeholder="Artigo" ></p>
            </div>

            <div style="width: 100%;">
                <p><input name="lei4" placeholder="Lei" ></p>
            </div>

            <div style="width: 100%;">
                <p><input name="historico4" type="textarea" placeholder="Histórico" ></p>
            </div>
        </div>

        <input type="button" value="Remover ocorrência 4" onclick="removeOcorrencia(this)" />
    `;
    }


    
    document.getElementById('ocorrencia').appendChild(div);
    
    }
    
    function removeOcorrencia(input) {
    document.getElementById('ocorrencia').removeChild(input.parentNode);
    }