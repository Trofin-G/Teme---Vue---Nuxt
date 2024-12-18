<template>
    <div class="sidebar">
        <div class="sidebar-wrapper">
            <h2>Componentele alese si pretul lor:</h2>

            <div class="items-wrapper">
                <div v-if="data.brand !== ''" class="item">
                    <h4>Brand:</h4>
                    <div class="item-wrapper"></div>
                    <p class="item-name">{{ data.brand }}</p>
                </div>

                <div v-if="Object.keys(data.model).length !== 0" class="item">
                    <h4>Model:</h4>
                    <div class="item-wrapper">
                        <p class="item-name">{{ data.model.name }}</p>
                        <p class="item-price">{{ data.model.price }} $</p>
                    </div>
                </div>
                <div v-if="Object.keys(data.case).length !== 0" class="item">
                    <h4>Case:</h4>
                    <div class="item-wrapper">
                        <p class="item-name">{{ data.case.caseName }}</p>
                        <p class="item-price">{{ data.case.casePrice }} $</p>
                    </div>
                </div>
                <div v-if="Object.keys(data.cooling).length !== 0" class="item">
                    <h4>Cooling:</h4>
                    <div class="item-wrapper">
                        <p class="item-name">{{ data.cooling.coolingName }}</p>
                        <p class="item-price">{{ data.cooling.coolingPrice }} $</p>
                    </div>
                </div>
                <div v-if="Object.keys(data.motherboard).length !== 0" class="item">
                    <h4>Motherboard:</h4>
                    <div class="item-wrapper">
                        <p class="item-name">{{ data.motherboard.motherboardName }}</p>
                        <p class="item-price">{{ data.motherboard.motherboardPrice }} $</p>
                    </div>
                </div>
                <div v-if="Object.keys(data.source).length !== 0" class="item">
                    <h4>Source:</h4>
                    <div class="item-wrapper">
                        <p class="item-name">{{ data.source.sourceName }}</p>
                        <p class="item-price">{{ data.source.sourcePrice }} $</p>
                    </div>
                </div>
                <div v-if="Object.keys(data.videoCard).length !== 0" class="item">
                    <h4>VideoCard:</h4>
                    <div class="item-wrapper">
                        <p class="item-name">{{ data.videoCard.videoCardName }}</p>
                        <p class="item-price">{{ data.videoCard.videoCardPrice }} $</p>
                    </div>
                </div>
                <div v-if="Object.keys(data.processor).length !== 0" class="item">
                    <h4>Processor:</h4>
                    <div class="item-wrapper">
                        <p class="item-name">{{ data.processor.processorName }}</p>
                        <p class="item-price">{{ data.processor.processorPrice }} $</p>
                    </div>
                </div>
                <div v-if="Object.keys(data.memoryRam).length !== 0" class="item">
                    <h4>MemoryRam:</h4>
                    <div class="item-wrapper">
                        <p class="item-name">{{ data.memoryRam.memoryRamName }}</p>
                        <p class="item-price">{{ data.memoryRam.memoryRamPrice }} $</p>
                    </div>
                </div>
                <div v-if="Object.keys(data.storageMemory).length !== 0" class="item">
                    <h4>StorageMemory:</h4>
                    <div class="item-wrapper">
                        <p class="item-name">{{ data.storageMemory.storageMemoryName }}</p>
                        <p class="item-price">{{ data.storageMemory.storageMemoryPrice }} $</p>
                    </div>
                </div>
            </div>

            <div class="total-price">
                <div class="item">
                    <p class="item-name">Total</p>
                    <p class="item-price">{{ finalPrice.currentPrice }} $</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        data: Object,
        finalPrice: Object,
    },
}
</script>