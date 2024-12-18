<template>
    <section class="step-two">
        <h2>Date contract</h2>

        <form @submit.prevent="stepTwoHandler">
            <div class="group">
                <!-- START:: Input type number -->
                <div class="input input--md">
                    <label class="input__label" for="contractNumber">Nr. contract</label>
                    <input v-model="$v.numarContract.$model"
                        :class="{ 'input-error': !$v.numarContract.required && $v.numarContract.$dirty || !$v.numarContract.numeric }"
                        type="number" id="contractNumber" class="input__number" name="contractNumber">

                </div>
                <!-- END:: Input type number -->

                <!-- START:: Input type datepicker -->
                <div class="input input--md">
                    <label class="input__label" for="datePicker">Data contract</label>
                    <input v-model="$v.dataContract.$model"
                        :class="{ 'input-error': !$v.dataContract.required && $v.dataContract.$dirty }" type="date"
                        id="datePicker" class="input__datepicker" name="datePicker" data-minDate="2021-11-15"
                        data-maxDate="2021-12-24">
                    <span class="input__icon">
                        <img src="../../assets/images/icons/datepicker.svg" alt="datepicker" width="24" height="23">
                    </span>
                </div>
                <!-- END:: Input type datepicker -->

                <!-- START:: Input type text -->
                <div class="input input--md">
                    <label class="input__label" for="agentName">Nume agent</label>
                    <input v-model="$v.numeAgent.$model"
                        :class="{ 'input-error': !$v.numeAgent.required && $v.numeAgent.$dirty || !$v.numeAgent.alpha || !$v.numeAgent.minLength || !$v.numeAgent.maxLength }"
                        type="text" id="agentName" class="input__text" name="agentName">
                </div>
                <!-- END:: Input type text -->
            </div>

            <h3>Date companie</h3>

            <div class="group">
                <!-- START:: Input type text -->
                <div class="input input--md">
                    <label class="input__label" for="companyName">Nume companie</label>
                    <input v-model="$v.numeCompanie.$model"
                        :class="{ 'input-error': !$v.numeCompanie.required && $v.numeCompanie.$dirty }" type="text"
                        id="companyName" class="input__text" name="companyName">
                </div>
                <!-- END:: Input type text -->

                <!-- START:: Input type number -->
                <div class="input input--md">
                    <label class="input__label" for="cui">CUI</label>
                    <input v-model="$v.cui.$model"
                        :class="{ 'input-error': !$v.cui.required && $v.cui.$dirty || !$v.cui.digits || !$v.cui.minLength || !$v.cui.maxLength }"
                        type="number" id="cui" class="input__number" name="cui">
                </div>
                <!-- END:: Input type number -->

                <!-- START:: Input type text -->
                <div class="input input--md">
                    <label class="input__label" for="companyNumber">J</label>
                    <input v-model="$v.j.$model" :class="{ 'input-error': !$v.j.required && $v.j.$dirty }" type="text"
                        id="companyNumber" class="input__text" name="companyNumber">
                </div>
                <!-- END:: Input type text -->
            </div>

            <div class="group">
                <!-- START:: Input type text -->
                <div class="input input--lg">
                    <label class="input__label" for="companyAddress">Adresă sediu social</label>
                    <input v-model="$v.adresaSediu.$model"
                        :class="{ 'input-error': !$v.adresaSediu.required && $v.adresaSediu.$dirty }" type="text"
                        id="companyAddress" class="input__text" name="companyAddress">
                </div>
                <!-- END:: Input type text -->
            </div>

            <div class="group">
                <!-- START:: Input type tel -->
                <div class="input input--md">
                    <label class="input__label" for="companyPhone">Telefon companie</label>
                    <input v-model="$v.telefonCompanie.$model"
                        :class="{ 'input-error': !$v.telefonCompanie.required && $v.telefonCompanie.$dirty || !$v.telefonCompanie.numeric || !$v.telefonCompanie.phone }"
                        type="tel" id="companyPhone" class="input__tel" name="companyPhone">
                </div>
                <!-- END:: Input type tel -->

                <!-- START:: Input type tel -->
                <div class="input input--md">
                    <label class="input__label" for="fax">Fax</label>
                    <input v-model="$v.faxCompanie.$model"
                        :class="{ 'input-error': !$v.faxCompanie.numeric || !$v.faxCompanie.phone }" type="tel" id="fax"
                        class="input__tel" name="fax">
                </div>
                <!-- END:: Input type tel -->
            </div>

            <div class="group">
                <!-- START:: Input type text -->
                <div class="input input--md">
                    <label class="input__label" for="legalRepresentative">Nume reprezentant legal</label>
                    <input v-model="$v.numeReprezentantLegal.$model"
                        :class="{ 'input-error': !$v.numeReprezentantLegal.required && $v.numeReprezentantLegal.$dirty || !$v.numeReprezentantLegal.alpha || !$v.numeReprezentantLegal.minLength || !$v.numeReprezentantLegal.maxLength }"
                        type="text" id="legalRepresentative" class="input__text" name="legalRepresentative">
                </div>
                <!-- END:: Input type text -->

                <!-- START:: Input type text -->
                <div class="input input--md">
                    <label class="input__label" for="legalRepresentativeRole">În calitate de</label>
                    <input v-model="$v.calitateReprezentantLegat.$model"
                        :class="{ 'input-error': !$v.calitateReprezentantLegat.required && $v.calitateReprezentantLegat.$dirty }"
                        type="text" id="legalRepresentativeRole" class="input__text" name="legalRepresentativeRole">
                </div>
                <!-- END:: Input type text -->
            </div>

            <div class="group">
                <!-- START:: Input type text -->
                <div class="input input--xs">
                    <label class="input__label" for="idSeries">BI/CI Seria</label>
                    <input v-model="$v.ciSeria.$model"
                        :class="{ 'input-error': !$v.ciSeria.required && $v.ciSeria.$dirty || !$v.ciSeria.letters || !$v.ciSeria.minLength || !$v.ciSeria.maxLength }"
                        type="text" id="idSeries" class="input__text" name="idSeries">
                </div>
                <!-- END:: Input type text -->

                <!-- START:: Input type number -->
                <div class="input input--xs">
                    <label class="input__label" for="idNumber">Nr.</label>
                    <input v-model="$v.ciNumar.$model"
                        :class="{ 'input-error': !$v.ciNumar.required && $v.ciNumar.$dirty || !$v.ciNumar.numeric || !$v.ciNumar.digits || !$v.ciNumar.minLength || !$v.ciNumar.maxLength }"
                        type="number" id="idNumber" class="input__number" name="idNumber">
                </div>
                <!-- END:: Input type number -->

                <!-- START:: Input type number -->
                <div class="input input--md">
                    <label class="input__label" for="cnp">CNP</label>
                    <input v-model="$v.cnp.$model"
                        :class="{ 'input-error': !$v.cnp.required && $v.cnp.$dirty || !$v.cnp.numeric || !$v.cnp.cnp }"
                        type="number" id="cnp" class="input__number" name="cnp">
                </div>
                <!-- END:: Input type number -->
            </div>

            <div class="group">
                <!-- START:: Input type tel -->
                <div class="input input--md">
                    <label class="input__label" for="phone">Telefon</label>
                    <input v-model="$v.telefon.$model"
                        :class="{ 'input-error': !$v.telefon.required && $v.telefon.$dirty || !$v.telefon.numeric || !$v.telefon.phone }"
                        type="tel" id="phone" class="input__tel" name="phone">
                </div>
                <!-- END:: Input type tel -->

                <!-- START:: Input type email -->
                <div class="input input--md">
                    <label class="input__label" for="email">Email</label>
                    <input v-model="$v.email.$model"
                        :class="{ 'input-error': !$v.email.required && $v.email.$dirty || !$v.email.email || !$v.email.mailRegex }"
                        type="email" id="email" class="input__email" name="email">
                </div>
                <!-- END:: Input type email -->
            </div>

            <div class="group">
                <!-- START:: Input type select -->
                <div class="input input--md">
                    <label for="select1" class="input__label input__label--select">Factura pentru serviciul de
                        Încărcare Electronică se va trimite în original prin:</label>
                    <select v-model="$v.metodaTrimitereFactura.$model"
                        :class="{ 'input-error': !$v.metodaTrimitereFactura.required && $v.metodaTrimitereFactura.$dirty }"
                        name="select1" id="select1" class="input__select" data-default="E-mail" data-searchable="true"
                        data-placeholder="Căutare">
                        <option value="1">Select 1</option>
                        <option value="2">Select 2</option>
                    </select>
                </div>
                <!-- END:: Input type select -->
            </div>

            <div class="group">
                <!-- START:: Input type select -->
                <div class="input input--md">
                    <label for="select2" class="input__label input__label--select">Informările de plată vor fi
                        trimise prin:</label>
                    <select v-model="$v.metodaInformatiiPlata.$model"
                        :class="{ 'input-error': !$v.metodaInformatiiPlata.required && $v.metodaInformatiiPlata.$dirty }"
                        name="select2" id="select2" class="input__select" data-default="SMS" data-searchable="true"
                        data-placeholder="Căutare">
                        <option value="1">Select 1</option>
                        <option value="2">Select 2</option>
                    </select>
                </div>
                <!-- END:: Input type select -->
            </div>

            <div class="group">
                <!-- START:: Input type number -->
                <div class="input input--md">
                    <label class="input__label" for="iban">Nr. cont bancar</label>
                    <input v-model="$v.numarContBancar.$model"
                        :class="{ 'input-error': !$v.numarContBancar.required && $v.numarContBancar.$dirty }" type="text"
                        id="iban" class="input__text" name="iban" placeholder="ex: ROXXXXXXXXXXXXXX">
                </div>
                <!-- END:: Input type number -->

                <!-- START:: Input type text -->
                <div class="input input--md">
                    <label class="input__label" for="bankName">Banca</label>
                    <input v-model="$v.banca.$model" :class="{ 'input-error': !$v.banca.required && $v.banca.$dirty }"
                        type="text" id="bankName" class="input__text" name="bankName">
                </div>
                <!-- END:: Input type text -->

                <!-- START:: Input type text -->
                <div class="input input--md">
                    <label class="input__label" for="bankLocation">Sucursala</label>
                    <input v-model="$v.sucursala.$model"
                        :class="{ 'input-error': !$v.sucursala.required && $v.sucursala.$dirty }" type="text"
                        id="bankLocation" class="input__text" name="bankLocation">
                </div>
                <!-- END:: Input type text -->
            </div>

            <div class="group">
                <!-- START:: Input type select -->
                <div class="input input--md">
                    <label for="select3" class="input__label input__label--select">Modalitate de plată:</label>
                    <select v-model="$v.metodaPlata.$model"
                        :class="{ 'input-error': !$v.metodaPlata.required && $v.metodaPlata.$dirty }" name="select3"
                        id="select3" class="input__select" data-default="Direct debit" data-searchable="true"
                        data-placeholder="Căutare">
                        <option value="1">Select 1</option>
                        <option value="2">Select 2</option>
                    </select>
                </div>
                <!-- END:: Input type select -->
            </div>

            <p>Garanții:</p>

            <div class="group">
                <!-- START:: Input type radio -->
                <div class="input input--radio">
                    <input type="radio" class="input__radio" name="radio" id="radio-1">
                    <label for="radio-1">Cec încasabil în orice moment cu valoare de 6.000 RON</label>
                </div>
                <!-- END:: Input type radio -->

                <!-- START:: Input type radio -->
                <div class="input input--radio">
                    <input type="radio" class="input__radio" name="radio" id="radio-2">
                    <label for="radio-2">Lorem ipsum dolor sit amet, consectetur incididunt</label>
                </div>
                <!-- END:: Input type radio -->

                <!-- START:: Input type radio -->
                <div class="input input--radio">
                    <input type="radio" class="input__radio" name="radio" id="radio-3">
                    <label for="radio-3">Adipisicing elit, sed do eiusmod tempor</label>
                </div>
                <!-- END:: Input type radio -->

                <!-- START:: Input type radio -->
                <div class="input input--radio">
                    <input type="radio" class="input__radio" name="radio" id="radio-4">
                    <label for="radio-4">Ut enim ad minim veniam</label>
                </div>
                <!-- END:: Input type radio -->
            </div>

            <h3 class="store-details">Adresă magazin</h3>

            <div class="group">
                <!-- START:: Input type text -->
                <div class="input input--md">
                    <label class="input__label" for="storeName">Nume magazin</label>
                    <input v-model="$v.numeMagazin.$model"
                        :class="{ 'input-error': !$v.numeMagazin.required && $v.numeMagazin.$dirty }" type="text"
                        id="storeName" class="input__text" name="storeName">
                </div>
                <!-- END:: Input type text -->

                <!-- START:: Input type select -->
                <div class="input input--md">
                    <label for="storeCounty" class="input__label">Județ (punct de lucru)</label>
                    <select v-model="$v.judet.$model" :class="{ 'input-error': !$v.judet.required && $v.judet.$dirty }"
                        name="storeCounty" id="storeCounty" class="input__select" data-searchable="true" data-default=" "
                        data-placeholder=" ">
                        <option value="a">Second select 1</option>
                        <option value="b">Second select 2</option>
                    </select>
                </div>
                <!-- END:: Input type select -->

                <!-- START:: Input type text -->
                <div class="input input--md">
                    <label class="input__label" for="storeCity">Localitate (punct de lucru)</label>
                    <input v-model="$v.localitate.$model"
                        :class="{ 'input-error': !$v.localitate.required && $v.localitate.$dirty }" type="text"
                        id="storeCity" class="input__text" name="storeCity">
                </div>
                <!-- END:: Input type text -->
            </div>

            <div class="group">
                <!-- START:: Input type text -->
                <div class="input input--lg">
                    <label class="input__label" for="storeAddress">Adresă (punct de lucru)</label>
                    <input v-model="$v.adresa.$model" :class="{ 'input-error': !$v.adresa.required && $v.adresa.$dirty }"
                        type="text" id="storeAddress" class="input__text" name="storeAddress">
                </div>
                <!-- END:: Input type text -->

                <!-- START:: Input type number -->
                <div class="input input--sm">
                    <label class="input__label" for="storeNumber">Nr. punct de lucru</label>
                    <input v-model="$v.numarPunctLucru.$model"
                        :class="{ 'input-error': !$v.numarPunctLucru.required && $v.numarPunctLucru.$dirty || !$v.numarPunctLucru.numeric }"
                        type="number" id="storeNumber" class="input__number" name="storeNumber">
                </div>
                <!-- END:: Input type number -->
            </div>

            <div class="submit-wrapper">
                <div class="group">
                    <!-- START:: Input type submit -->
                    <div class="input input--with-icon input--submit-md">
                        <input type="submit" class="input__submit" value="Pasul următor">
                    </div>
                    <!-- END:: Input type submit -->
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import { required, minLength, maxLength, helpers, numeric, email, alpha } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

let cnp = helpers.regex('cnp', /^[1-9]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)(00[1-9]|0[1-9]\d|[1-9]\d\d)\d$/i);
let letters = helpers.regex('letters', /^[a-zA-Z]+$/g);
let digits = helpers.regex('digits', /^[0-9]{6}$/g);
let phone = helpers.regex('phone', /^07[0-9]{8}$/g);
let mailRegex = helpers.regex('mailRegex', /^([\w\d\-]+)@(([\w\d\-]{1,67})|([\w\d]+\.[\w\d\-]{1,67}))\.(([a-zA-Z\d]{2,4})(\.[a-zA-Z\d]{2})?)$/i);
// let orderNumber = helpers.regex('orderNumber', /^[J|F|C]{1}[0-9]{2}\/{1}[1-9]{6}\/{1}(19|20)\d{2}$/g);

export default {
    mixins: [validationMixin],

    data() {
        return {
            numarContract: '',
            dataContract: '',
            numeAgent: '',
            numeCompanie: '',
            cui: '',
            j: '',
            adresaSediu: '',
            telefonCompanie: '',
            faxCompanie: '',
            numeReprezentantLegal: '',
            calitateReprezentantLegat: '',
            ciSeria: '',
            ciNumar: '',
            cnp: '',
            telefon: '',
            email: '',
            metodaTrimitereFactura: '',
            metodaInformatiiPlata: '',
            numarContBancar: '',
            banca: '',
            sucursala: '',
            metodaPlata: '',
            // garantii: '',
            numeMagazin: '',
            judet: '',
            localitate: '',
            adresa: '',
            numarPunctLucru: '',

            stepTwoForm: {
                numarContract: '',
                dataContract: '',
                numeAgent: '',
                numeCompanie: '',
                cui: '',
                j: '',
                adresaSediu: '',
                telefonCompanie: '',
                faxCompanie: '',
                numeReprezentantLegal: '',
                calitateReprezentantLegat: '',
                ciSeria: '',
                ciNumar: '',
                cnp: '',
                telefon: '',
                email: '',
                metodaTrimitereFactura: '',
                metodaInformatiiPlata: '',
                numarContBancar: '',
                banca: '',
                sucursala: '',
                metodaPlata: '',
                garantii: '',
                numeMagazin: '',
                judet: '',
                localitate: '',
                adresa: '',
                numarPunctLucru: '',
            }
        }
    },

    validations: {
        numarContract: { required, numeric },
        dataContract: { required },
        numeAgent: {
            required, minLength: minLength(2),
            maxLength: maxLength(20),
            alpha,
        },
        numeCompanie: { required },
        cui: {
            required,
            numeric,
            minLength: minLength(6),
            maxLength: maxLength(6),
            digits: digits
        },
        j: {
            required,
            // orderNumber: orderNumber
        },
        adresaSediu: { required },
        telefonCompanie: {
            required,
            numeric,
            phone: phone
        },
        faxCompanie: {
            numeric,
            phone: phone
        },
        numeReprezentantLegal: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(20),
            alpha,
        },
        calitateReprezentantLegat: { required },
        ciSeria: {
            required,
            letters: letters,
            minLength: minLength(2),
            maxLength: maxLength(2),
        },
        ciNumar: {
            required,
            numeric,
            minLength: minLength(6),
            maxLength: maxLength(6),
            digits: digits
        },
        cnp: {
            required,
            numeric,
            cnp: cnp
        },
        telefon: {
            required,
            numeric,
            phone: phone
        },
        email: {
            required,
            email,
            mailRegex: mailRegex
        },
        metodaTrimitereFactura: { required },
        metodaInformatiiPlata: { required },
        numarContBancar: { required },
        banca: { required },
        sucursala: { required },
        metodaPlata: { required },
        numeMagazin: { required },
        judet: { required },
        localitate: { required },
        adresa: { required },
        numarPunctLucru: {
            required,
            numeric
        },

    },

    methods: {
        stepTwoHandler() {
            this.$v.numarContract.$touch()
            this.$v.dataContract.$touch()
            this.$v.numeAgent.$touch()
            this.$v.numeCompanie.$touch()
            this.$v.cui.$touch()
            this.$v.j.$touch()
            this.$v.adresaSediu.$touch()
            this.$v.telefonCompanie.$touch()
            this.$v.faxCompanie.$touch()
            this.$v.numeReprezentantLegal.$touch()
            this.$v.calitateReprezentantLegat.$touch()
            this.$v.ciSeria.$touch()
            this.$v.ciNumar.$touch()
            this.$v.cnp.$touch()
            this.$v.telefon.$touch()
            this.$v.email.$touch()
            this.$v.metodaTrimitereFactura.$touch()
            this.$v.metodaInformatiiPlata.$touch()
            this.$v.numarContBancar.$touch()
            this.$v.banca.$touch()
            this.$v.sucursala.$touch()
            this.$v.metodaPlata.$touch()
            this.$v.numeMagazin.$touch()
            this.$v.judet.$touch()
            this.$v.localitate.$touch()
            this.$v.adresa.$touch()
            this.$v.numarPunctLucru.$touch()

            if (
                !this.$v.numarContract.$invalid &&
                !this.$v.dataContract.$invalid &&
                !this.$v.numeAgent.$invalid &&
                !this.$v.numeCompanie.$invalid &&
                !this.$v.cui.$invalid &&
                !this.$v.j.$invalid &&
                !this.$v.adresaSediu.$invalid &&
                !this.$v.telefonCompanie.$invalid &&
                !this.$v.faxCompanie.$invalid &&
                !this.$v.numeReprezentantLegal.$invalid &&
                !this.$v.calitateReprezentantLegat.$invalid &&
                !this.$v.ciSeria.$invalid &&
                !this.$v.ciNumar.$invalid &&
                !this.$v.cnp.$invalid &&
                !this.$v.telefon.$invalid &&
                !this.$v.email.$invalid &&
                !this.$v.metodaTrimitereFactura.$invalid &&
                !this.$v.metodaInformatiiPlata.$invalid &&
                !this.$v.numarContBancar.$invalid &&
                !this.$v.banca.$invalid &&
                !this.$v.sucursala.$invalid &&
                !this.$v.metodaPlata.$invalid &&
                !this.$v.numeMagazin.$invalid &&
                !this.$v.judet.$invalid &&
                !this.$v.localitate.$invalid &&
                !this.$v.adresa.$invalid &&
                !this.$v.numarPunctLucru.$invalid
            ) {
                this.stepTwoForm.numarContract = this.$v.numarContract.$model
                this.stepTwoForm.dataContract = this.$v.dataContract.$model
                this.stepTwoForm.numeAgent = this.$v.numeAgent.$model
                this.stepTwoForm.numeCompanie = this.$v.numeCompanie.$model
                this.stepTwoForm.cui = this.$v.cui.$model
                this.stepTwoForm.j = this.$v.j.$model
                this.stepTwoForm.adresaSediu = this.$v.adresaSediu.$model
                this.stepTwoForm.telefonCompanie = this.$v.telefonCompanie.$model
                this.stepTwoForm.faxCompanie = this.$v.faxCompanie.$model
                this.stepTwoForm.numeReprezentantLegal = this.$v.numeReprezentantLegal.$model
                this.stepTwoForm.calitateReprezentantLegat = this.$v.calitateReprezentantLegat.$model
                this.stepTwoForm.ciSeria = this.$v.ciSeria.$model
                this.stepTwoForm.ciNumar = this.$v.ciNumar.$model
                this.stepTwoForm.cnp = this.$v.cnp.$model
                this.stepTwoForm.telefon = this.$v.telefon.$model
                this.stepTwoForm.email = this.$v.email.$model
                this.stepTwoForm.metodaTrimitereFactura = this.$v.metodaTrimitereFactura.$model
                this.stepTwoForm.metodaInformatiiPlata = this.$v.metodaInformatiiPlata.$model
                this.stepTwoForm.numarContBancar = this.$v.numarContBancar.$model
                this.stepTwoForm.banca = this.$v.banca.$model
                this.stepTwoForm.sucursala = this.$v.sucursala.$model
                this.stepTwoForm.metodaPlata = this.$v.metodaPlata.$model
                // this.stepTwoForm.garantii = this.$v.garantii.$model
                this.stepTwoForm.numeMagazin = this.$v.numeMagazin.$model
                this.stepTwoForm.judet = this.$v.judet.$model
                this.stepTwoForm.localitate = this.$v.localitate.$model
                this.stepTwoForm.adresa = this.$v.adresa.$model
                this.stepTwoForm.numarPunctLucru = this.$v.numarPunctLucru.$model

                this.$emit('stepTwoForm', this.stepTwoForm)

                console.log('succes submit form 2');
            } else {
                console.log('fail submit form 2');
            }
        },
    },

}
</script>