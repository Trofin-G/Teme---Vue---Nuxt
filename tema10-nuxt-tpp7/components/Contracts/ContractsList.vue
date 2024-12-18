<template>
    <div class="list">
        <!-- start:: item -->
        <div class="list__header">
            <div class="inner">
                <div class="contract__details">
                    <p class="contract__details--company">Companie</p>
                    <p class="contract__details--type">Tip contract</p>
                    <p class="contract__details--status">Status</p>
                </div>
            </div>
        </div>
        <!-- end:: item -->

        <!-- start:: item -->
        <p v-if="items.length == 0" class="no-results">Nu a fost gasit niciun rezultat!</p>
        <div v-for="item in paginatedResults" class="contract" :data-status="item.statusContract">
            <div class="inner">
                <div class="contract__details">
                    <p class="contract__details--company">{{ item.dateContract.numeCompanie }}</p>
                    <p class="contract__details--type">{{ item.tipContract.tip }}</p>
                    <p class="contract__details--status">{{ item.statusContract }}</p>
                </div>

                <div class="contract__actions">
                    <div v-if="item.statusContract === 'Nou'" class="contract__actions--delete">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19"
                                height="19" viewBox="0 0 19 19">
                                <g fill="none">
                                    <path
                                        d="M15.833,7.125v9.5a1.583,1.583,0,0,1-1.583,1.583H4.75a1.583,1.583,0,0,1-1.583-1.583v-9.5"
                                        fill="none" stroke="#2e2556" stroke-linecap="square" stroke-miterlimit="10"
                                        stroke-width="1.583" />
                                    <line x2="17.417" transform="translate(0.792 3.958)" fill="none" stroke="#2e2556"
                                        stroke-linecap="square" stroke-miterlimit="10" stroke-width="1.583" />
                                    <line y2="4.75" transform="translate(9.5 9.5)" fill="none" stroke="#2e2556"
                                        stroke-linecap="square" stroke-miterlimit="10" stroke-width="1.583" />
                                    <line y2="4.75" transform="translate(6.333 9.5)" fill="none" stroke="#2e2556"
                                        stroke-linecap="square" stroke-miterlimit="10" stroke-width="1.583" />
                                    <line y2="4.75" transform="translate(12.667 9.5)" fill="none" stroke="#2e2556"
                                        stroke-linecap="square" stroke-miterlimit="10" stroke-width="1.583" />
                                    <path d="M6.333,3.958V.792h6.333V3.958" fill="none" stroke="#2e2556"
                                        stroke-miterlimit="10" stroke-width="1.583" />
                                </g>
                            </svg>
                            <span>Șterge</span>
                        </a>
                    </div>
                    <div v-if="item.statusContract === 'Nou' || item.statusContract === 'Refuzat'"
                        class="contract__actions--change">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18"
                                height="18" viewBox="0 0 18 18">
                                <g transform="translate(0 0)" fill="none">
                                    <path d="M6.424,3.545H.8V17.2H14.455V11.576" fill="none" stroke="#2e2556"
                                        stroke-linecap="square" stroke-miterlimit="10" stroke-width="1.606" />
                                    <path d="M8.031,12.379l-3.212.8.8-3.212,8.834-8.834,2.409,2.409Z" fill="none"
                                        stroke="#2e2556" stroke-linecap="square" stroke-miterlimit="10"
                                        stroke-width="1.606" />
                                </g>
                            </svg>
                            <span>Modifică</span>
                        </a>
                    </div>
                    <div v-if="item.statusContract === 'Nou' || item.statusContract === 'Refuzat'"
                        class="contract__actions--approval">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                                height="19" viewBox="0 0 16 19">
                                <g transform="translate(0 0)" fill="none">
                                    <path d="M8,1.289,1.651,9.339H5.619v5.635h4.762V9.339h3.968Z" fill="none"
                                        stroke="#2e2556" stroke-linecap="square" stroke-miterlimit="10"
                                        stroke-width="1.599" />
                                    <line x2="4.762" transform="translate(5.619 18.195)" fill="none" stroke="#2e2556"
                                        stroke-linecap="square" stroke-miterlimit="10" stroke-width="1.587" />
                                </g>
                            </svg>
                            <span>Trimite spre aprobare</span>
                        </a>
                    </div>
                    <div v-if="item.statusContract === 'In curs de validare' || item.statusContract === 'Semnat' || item.statusContract === 'Aprobat'"
                        class="contract__actions--view">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19"
                                height="14" viewBox="0 0 19 14">
                                <g fill="none">
                                    <path
                                        d="M1.087,7.92a1.582,1.582,0,0,1,0-1.84C2.332,4.348,5.4.778,9.5.778s7.168,3.57,8.413,5.3a1.582,1.582,0,0,1,0,1.84c-1.245,1.732-4.312,5.3-8.413,5.3S2.332,9.652,1.087,7.92Z"
                                        fill="none" stroke="#2e2556" stroke-linecap="square" stroke-miterlimit="10"
                                        stroke-width="1.569" />
                                    <ellipse cx="3.167" cy="3.111" rx="3.167" ry="3.111" transform="translate(6.333 3.889)"
                                        fill="none" stroke="#2e2556" stroke-linecap="square" stroke-miterlimit="10"
                                        stroke-width="1.569" />
                                </g>
                            </svg>
                            <span>Vizualizează</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- end:: item -->
    </div>
</template>

<script>


export default {
    props: {
        items: Array,
        perPage: Number,
        currentPage: Number,
    },

    computed: {
        paginatedResults() {
            if (this.items !== undefined) {
                let indexStart = (this.currentPage - 1) * this.perPage;
                let indexEnd = this.currentPage * this.perPage;
                return this.items.slice(indexStart, indexEnd);
            }
        }
    },

}
</script>