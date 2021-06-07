function addRow() {
    const div = document.createElement('div');
    var x = document.getElementsByClassName('end');

    //div.className = 'row';

    if(x.length == 1){
    div.innerHTML = `

                <div class="row div-form">
                    <div style="width: 100%;"><input class="end" readonly type="text" value="Endereço 2">
                        <p><input name="rua2" placeholder="Rua" ></p>
                    </div>

                    <div style="width: 100%;">
                        <p><input name="cidade2" placeholder="Cidade" ></p>
                    </div>

                    <div style="width: 100%;">
                        <p><input name="estado2" placeholder="Estado" ></p>
                    </div>
                </div>

                <div class="row div-form">
                    <div style="width: 50%;">
                        <p><input name="numero2" placeholder="Número" type="number" ></p>
                    </div>
                    <div style="width: 50%; padding-left: 35px;">
                        <p><input name="complemento2" placeholder="Complemento" ></p>
                    </div>
                </div>

        <input type="button" value="Remover endereço 2" onclick="removeRow(this)" />
    `;
    }

    if(x.length == 2){
    div.innerHTML = `

                <div class="row div-form">
                    <div style="width: 100%;"><input class="end" readonly type="text" value="Endereço 3">
                        <p><input name="rua3" placeholder="Rua" ></p>
                    </div>

                    <div style="width: 100%;">
                        <p><input name="cidade3" placeholder="Cidade" ></p>
                    </div>

                    <div style="width: 100%;">
                        <p><input  name="estado3" placeholder="Estado" ></p>
                    </div>
                </div>

                <div class="row div-form">
                    <div style="width: 50%;">
                        <p><input name="numero3" placeholder="Número" type="number" ></p>
                    </div>
                    <div style="width: 50%; padding-left: 35px;">
                        <p><input name="complemento3" placeholder="Complemento" ></p>
                    </div>
                </div>

        <input type="button" value="Remover endereço 3" onclick="removeRow(this)" />
    `;
    }

    if(x.length == 3){
    div.innerHTML = `

                <div class="row div-form">
                    <div style="width: 100%;"><input class="end" readonly type="text" value="Endereço 4">
                        <p><input name="rua4" placeholder="Rua" ></p>
                    </div>

                    <div style="width: 100%;">
                        <p><input name="cidade4" placeholder="Cidade" ></p>
                    </div>

                    <div style="width: 100%;">
                        <p><input name="estado4" placeholder="Estado" ></p>
                    </div>
                </div>

                <div class="row div-form">
                    <div style="width: 50%;">
                        <p><input name="numero4" placeholder="Número" type="number" ></p>
                    </div>
                    <div style="width: 50%; padding-left: 35px;">
                        <p><input name="complemento4" placeholder="Complemento" ></p>
                    </div>
                </div>

        <input type="button" value="Remover endereço 4" onclick="removeRow(this)" />
    `;
    }


    
    document.getElementById('content').appendChild(div);
    
    }
    
    function removeRow(input) {
    document.getElementById('content').removeChild(input.parentNode);
    }