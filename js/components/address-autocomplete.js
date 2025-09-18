class AddressAutocomplete extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>

                .address-autocomplete {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                      width:50%;
                    padding :  10px;





                    
                }
                .departure-input, .arrival-input {
                    width: 100%;
                    padding: 12px;
                    margin: 10px 0;
                    box-sizing: border-box;
                }
                    .texte{
                     line-height:1.7;

                    }
            </style>
            <div class="address-autocomplete">
                <p class ="text">Entrez votre itinéraire :</p>


            <label>Départe</label>
                <input type="text" class="departure-input" placeholder="Enter departure address">
                <Départe>Arrivée</Départe>
                <input type="text" class="arrival-input" placeholder="Enter arrival address">
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('address-autocomplete', AddressAutocomplete);


