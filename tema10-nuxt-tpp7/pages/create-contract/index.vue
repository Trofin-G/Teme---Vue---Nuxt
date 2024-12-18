<template>
    <main class="new-contract">
        <div class="pp-container">
            <!-- Steps -->
            <CreateContractSteps :stepValue="stepValue" />

            <!-- Step One -->
            <CreateContractStepOne v-if="stepValue == 1" :inputs="inputStepOne" @stepOneForm="stepOneForm" />

            <!-- Step Two -->
            <CreateContractStepTwo v-if="stepValue == 2" @stepTwoForm="stepTwoForm"/>

            <!-- Step Two -->
            <CreateContractStepThree v-if="stepValue == 3" @stepThreeForm="stepThreeForm" />

        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            stepValue: 1,

            finalForm: {
                id: "99",
                statusContract: "Nou",
                tipContract: {
                    cui: "",
                    tip: "",
                },
                dateContract: {
                    numarContract: "",
                    dataContract: "",
                    numeAgent: "",
                    numeCompanie: "",
                    cui: "",
                    j: "",
                    adresaSediu: "",
                    telefonCompanie: "",
                    faxCompanie: "",
                    numeReprezentantLegal: "",
                    calitateReprezentantLegat: "",
                    ciSeria: "",
                    ciNumar: "",
                    cnp: "",
                    telefon: "",
                    email: "",
                    metodaTrimitereFactura: "",
                    metodaInformatiiPlata: "",
                    numarContBancar: "",
                    banca: "",
                    sucursala: "",
                    metodaPlata: "",
                    garantii: "",
                    numeMagazin: "",
                    judet: "",
                    localitate: "",
                    adresa: "",
                    numarPunctLucru: "",
                },
            }
        }
    },

    methods: {
        stepOneForm(formValue) {
            this.stepValue++

            this.finalForm.tipContract.tip = formValue.checkboxSelected
            this.finalForm.tipContract.cui = formValue.cui
        },

        stepTwoForm(formValue) {
            this.stepValue++

            this.finalForm.dateContract.numarContract = formValue.numarContract
            this.finalForm.dateContract.dataContract = formValue.dataContract
            this.finalForm.dateContract.numeAgent = formValue.numeAgent
            this.finalForm.dateContract.numeCompanie = formValue.numeCompanie
            this.finalForm.dateContract.cui = formValue.cui
            this.finalForm.dateContract.j = formValue.j
            this.finalForm.dateContract.adresaSediu = formValue.adresaSediu
            this.finalForm.dateContract.telefonCompanie = formValue.telefonCompanie
            this.finalForm.dateContract.faxCompanie = formValue.faxCompanie
            this.finalForm.dateContract.numeReprezentantLegal = formValue.numeReprezentantLegal
            this.finalForm.dateContract.calitateReprezentantLegat = formValue.calitateReprezentantLegat
            this.finalForm.dateContract.ciSeria = formValue.ciSeria
            this.finalForm.dateContract.ciNumar = formValue.ciNumar
            this.finalForm.dateContract.cnp = formValue.cnp
            this.finalForm.dateContract.telefon = formValue.telefon
            this.finalForm.dateContract.email = formValue.email
            this.finalForm.dateContract.metodaTrimitereFactura = formValue.metodaTrimitereFactura
            this.finalForm.dateContract.metodaInformatiiPlata = formValue.metodaInformatiiPlata
            this.finalForm.dateContract.numarContBancar = formValue.numarContBancar
            this.finalForm.dateContract.banca = formValue.banca
            this.finalForm.dateContract.sucursala = formValue.sucursala
            this.finalForm.dateContract.metodaPlata = formValue.metodaPlata
            // this.finalForm.dateContract.garantii = formValue.garantii
            this.finalForm.dateContract.numeMagazin = formValue.numeMagazin
            this.finalForm.dateContract.judet = formValue.judet
            this.finalForm.dateContract.localitate = formValue.localitate
            this.finalForm.dateContract.adresa = formValue.adresa
            this.finalForm.dateContract.numarPunctLucru = formValue.numarPunctLucru
        },

        stepThreeForm() {
            this.$store.dispatch('contracts/listContracts/sendNewContract', this.finalForm)
            console.log(this.finalForm, 'final');
        }
    },


    computed: {
        ...mapGetters({
            inputStepOne: "create-contract/createContract/getInputStepOne",
        })
    },

    mounted() {
        this.$store.commit("homepage/listMessages/setMessageUnread")
    }
}
</script>


