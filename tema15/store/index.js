export const state = () => ({
  dataInitial: [
    {
      id: 1,
      brand: "MSI",
      imgSrc: require("assets/images/msi-logo.png"),
      model: [
        {
          modelName: "MPG TRIDENT A 12TC-449EU",
          modelPrice: 1000,
          case: [
            {
              caseName: "AQIRYS Saiph Yellow",
              caseLedColor: "ARGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 4,
              casePrice: 200,
            },
            {
              caseName: "Segotep Lux S",
              caseLedColor: "RGB & aRGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 6,
              casePrice: 75,
            },
          ],
          cooling: [
            {
              coolingName: "ARCTIC Liquid Freezer II - 206",
              coolingType: "Lichida",
              coolingLedColor: "RGB",
              coolingPrice: 145,
            },
            {
              coolingName: "Noctua NH-D15",
              coolingType: "Aer",
              coolingLedColor: "No",
              coolingPrice: 110,
            },
            {
              coolingName: " ARCTIC Liquid Freezer II - 360",
              coolingType: "Lichida",
              coolingLedColor: "No",
              coolingPrice: 115,
            },
            {
              coolingName: "NZXT Kraken 360",
              coolingType: "Lichida",
              coolingLedColor: "No",
              coolingPrice: 204,
            },
            {
              coolingName: "AK620 Digital” skt. Universal",
              coolingType: "Aer",
              coolingLedColor: "No",
              coolingPrice: 130,
            },
          ],
          motherboard: [
            {
              motherboardName: "MSI MPG B550 GAMING PLUS",
              motherboardType: "B550",
              motherboardPrice: 140,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "AQIRYS Pulsar",
                    sourceType: "80 Plus Bronze",
                    soursePower: "750W",
                    sourcePrice: 75,
                  },
                  {
                    sourceName: "Gigabyte UD750GM  ",
                    sourceType: "80 PLUS Gold",
                    soursePower: "750W",
                    sourcePrice: 95,
                  },
                  {
                    sourceName: "AQIRYS Magnetar",
                    sourceType: "80 PLUS Gold",
                    soursePower: "850W",
                    sourcePrice: 140,
                  },
                  {
                    sourceName: "Thermaltake Smart RGB",
                    sourceType: "80 PLUS",
                    soursePower: "700W",
                    sourcePrice: 80,
                  },
                  {
                    sourceName: "Corsair RM850e",
                    sourceType: "80 Plus Gold",
                    soursePower: "850W",
                    sourcePrice: 165,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "MSI GeForce RTX 4060 Ti GAMING",
                    videoCardType: "RTX 4060",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 525,
                  },
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },
                  {
                    videoCardName: "MSI AMD Radeon RX 580 ARMOR 8G OC",
                    videoCardType: "RX 580 ARMOR",
                    videoCardMemory: "8GB DDR5",
                    videoCardBit: "256-bit",
                    videoCardPrice: 175,
                  },
                  {
                    videoCardName:
                      "ASUS TUF Gaming Radeon™ RX 7700 XT OC Edition",
                    videoCardType: "RX 7700 XT",
                    videoCardMemory: "12GB GDDR6",
                    videoCardBit: "192-bit",
                    videoCardPrice: 650,
                  },
                  {
                    videoCardName:
                      "Gigabyte nVidia GeForce RTX 4060 Ti Gaming OC",
                    videoCardType: "RTX 4060 Ti",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 550,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "AMD Ryzen™ 5 5500",
                    processorType: "5 5500",
                    processorSpeed: "4.2GHz",
                    processorPrice: 100,
                  },
                  {
                    processorName: "Intel® Core™ i7-10700F Comet Lake",
                    processorType: "i7-10700F",
                    processorSpeed: "2.9GHz",
                    processorPrice: 210,
                  },
                  {
                    processorName: "AMD Ryzen™ 7 7800X3D",
                    processorType: "7 7800X3D",
                    processorSpeed: "4.2/5.0GHz Max Boost",
                    processorPrice: 400,
                  },
                  {
                    processorName: "Intel Core i7 8700K",
                    processorType: "i7 8700K",
                    processorSpeed: "3.7 GHz",
                    processorPrice: 420,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO",
                    memoryRamType: "DDR4, 3600MHz",
                    memoryRamSpace: "64GB",
                    memoryRamPrice: 190,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Kingston FURY Beast",
                    memoryRamType: "DDR5, 5200MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 120,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "HDD WD Blue",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "5400rpm",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 50,
                  },
                  {
                    storageMemoryName:
                      "HDD Seagate Constellation ES.3 ST2000NM0011",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "7200rpm",
                    storageMemoryCapacity: "2TB",
                    storageMemoryPrice: 85,
                  },
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "3500 MB/s",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 40,
                  },
                  {
                    storageMemoryName:
                      "Solid-State Drive (SSD) WD Black SN750 NVMe",
                    storageMemoryType: "M.2",
                    storageMemorySpeed: "	3470 MB/s",
                    storageMemoryCapacity: "500GB",
                    storageMemoryPrice: 45,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Razer BlackWidow V3 Mini",
                      keyboardType: "wire",
                      keyboardPrice: 120,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech G PRO LightSpeed Hero",
                      mouseType: "wireless ",
                      mousePrice: 60,
                    },
                    {
                      mouseName: "Razer DeathAdder Essential 2021",
                      mouseType: "wire",
                      mousePrice: 22,
                    },
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Sonos One SL",
                      speakersType: "wireless",
                      speakersPrice: 165,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                    {
                      mousepadName: "Logitech G640 L",
                      mousepadDimension: "460 x 400 x 3 mm",
                      mousepadPrice: 30,
                    },
                  ],
                },
              },
            },
            {
              motherboardName: "MSI MPG Z490 GAMING PLUS",
              motherboardType: "Z490",
              motherboardPrice: 160,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "AQIRYS Pulsar",
                    sourceType: "80 Plus Bronze",
                    soursePower: "750W",
                    sourcePrice: 75,
                  },
                  {
                    sourceName: "Gigabyte UD750GM  ",
                    sourceType: "80 PLUS Gold",
                    soursePower: "750W",
                    sourcePrice: 95,
                  },
                  {
                    sourceName: "AQIRYS Magnetar",
                    sourceType: "80 PLUS Gold",
                    soursePower: "850W",
                    sourcePrice: 140,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "MSI GeForce RTX 4060 Ti GAMING",
                    videoCardType: "RTX 4060",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 525,
                  },
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },
                  {
                    videoCardName: "MSI AMD Radeon RX 580 ARMOR 8G OC",
                    videoCardType: "RX 580 ARMOR",
                    videoCardMemory: "8GB DDR5",
                    videoCardBit: "256-bit",
                    videoCardPrice: 175,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "AMD Ryzen™ 5 5500",
                    processorType: "5 5500",
                    processorSpeed: "4.2GHz",
                    processorPrice: 100,
                  },
                  {
                    processorName: "Intel® Core™ i7-10700F Comet Lake",
                    processorType: "i7-10700F",
                    processorSpeed: "2.9GHz",
                    processorPrice: 210,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO",
                    memoryRamType: "DDR4, 3600MHz",
                    memoryRamSpace: "64GB",
                    memoryRamPrice: 190,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "HDD WD Blue",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "5400rpm",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 50,
                  },
                  {
                    storageMemoryName:
                      "HDD Seagate Constellation ES.3 ST2000NM0011",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "7200rpm",
                    storageMemoryCapacity: "2TB",
                    storageMemoryPrice: 85,
                  },
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "3500 MB/s",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 40,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          modelName: "MAG Codex 5 11TG-814EU",
          modelPrice: 1500,
          case: [
            {
              caseName: "Segotep Lux S",
              caseLedColor: "RGB & aRGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 6,
              casePrice: 75,
            },
            {
              caseName: "AQIRYS Procyon Black",
              caseLedColor: "ARGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 5,
              casePrice: 175,
            },
            {
              caseName: "NZXT H7 Flow",
              caseLedColor: "Violet",
              caseTypeSize: "Middletower",
              caseNumberFans: 7,
              casePrice: 140,
            },
            {
              caseName: "AQIRYS Aquilla",
              caseLedColor: "RGB",
              caseTypeSize: "Middletower",
              caseNumberFans: 4,
              casePrice: 130,
            },
          ],
          cooling: [
            {
              coolingName: "ARCTIC Liquid Freezer II - 206",
              coolingType: "Lichida",
              coolingLedColor: "RGB",
              coolingPrice: 145,
            },
            {
              coolingName: "Noctua NH-D15",
              coolingType: "Aer",
              coolingLedColor: "No",
              coolingPrice: 110,
            },
            {
              coolingName: " ARCTIC Liquid Freezer II - 360",
              coolingType: "Lichida",
              coolingLedColor: "No",
              coolingPrice: 115,
            },
            {
              coolingName: "AK620 Digital” skt. Universal",
              coolingType: "Aer",
              coolingLedColor: "No",
              coolingPrice: 130,
            },
          ],
          motherboard: [
            {
              motherboardName: "ASUS ROG STRIX X570-F GAMING",
              motherboardType: "AMD X570",
              motherboardPrice: 290,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "Gigabyte UD750GM  ",
                    sourceType: "80 PLUS Gold",
                    soursePower: "750W",
                    sourcePrice: 95,
                  },
                  {
                    sourceName: "AQIRYS Magnetar",
                    sourceType: "80 PLUS Gold",
                    soursePower: "850W",
                    sourcePrice: 140,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },
                  {
                    videoCardName: "MSI AMD Radeon RX 580 ARMOR 8G OC",
                    videoCardType: "RX 580 ARMOR",
                    videoCardMemory: "8GB DDR5",
                    videoCardBit: "256-bit",
                    videoCardPrice: 175,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "AMD Ryzen™ 5 5500",
                    processorType: "5 5500",
                    processorSpeed: "4.2GHz",
                    processorPrice: 100,
                  },
                  {
                    processorName: "Intel® Core™ i7-10700F Comet Lake",
                    processorType: "i7-10700F",
                    processorSpeed: "2.9GHz",
                    processorPrice: 210,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "3500 MB/s",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 40,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                  ],
                },
              },
            },
            {
              motherboardName: "MSI MPG Z490 GAMING PLUS",
              motherboardType: "Z490",
              motherboardPrice: 160,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "AQIRYS Pulsar",
                    sourceType: "80 Plus Bronze",
                    soursePower: "750W",
                    sourcePrice: 75,
                  },
                  {
                    sourceName: "Gigabyte UD750GM  ",
                    sourceType: "80 PLUS Gold",
                    soursePower: "750W",
                    sourcePrice: 95,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "MSI GeForce RTX 4060 Ti GAMING",
                    videoCardType: "RTX 4060",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 525,
                  },
                  {
                    videoCardName:
                      "Gigabyte nVidia GeForce RTX 4060 Ti Gaming OC",
                    videoCardType: "RTX 4060 Ti",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 550,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "Intel Core i7 8700K",
                    processorType: "i7 8700K",
                    processorSpeed: "3.7 GHz",
                    processorPrice: 420,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO",
                    memoryRamType: "DDR4, 3600MHz",
                    memoryRamSpace: "64GB",
                    memoryRamPrice: 190,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "HDD WD Blue",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "5400rpm",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 50,
                  },
                  {
                    storageMemoryName:
                      "Solid-State Drive (SSD) WD Black SN750 NVMe",
                    storageMemoryType: "M.2",
                    storageMemorySpeed: "	3470 MB/s",
                    storageMemoryCapacity: "500GB",
                    storageMemoryPrice: 45,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech G PRO LightSpeed Hero",
                      mouseType: "wireless ",
                      mousePrice: 60,
                    },
                    {
                      mouseName: "Razer DeathAdder Essential 2021",
                      mouseType: "wire",
                      mousePrice: 22,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Sonos One SL",
                      speakersType: "wireless",
                      speakersPrice: 165,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                    {
                      mousepadName: "Logitech G640 L",
                      mousepadDimension: "460 x 400 x 3 mm",
                      mousepadPrice: 30,
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    {
      id: 2,
      brand: "Alienware Aurora",
      imgSrc: require("assets/images/alienware-logo.png"),
      model: [
        {
          modelName: "R13",
          modelPrice: 800,
          case: [
            {
              caseName: "AQIRYS Aquilla",
              caseLedColor: "RGB",
              caseTypeSize: "Middletower",
              caseNumberFans: 4,
              casePrice: 130,
            },
            {
              caseName: "AQIRYS Saiph Yellow",
              caseLedColor: "ARGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 4,
              casePrice: 200,
            },
          ],
          cooling: [
            {
              coolingName: "ARCTIC Liquid Freezer II - 206",
              coolingType: "Lichida",
              coolingLedColor: "RGB",
              coolingPrice: 145,
            },
            {
              coolingName: " ARCTIC Liquid Freezer II - 360",
              coolingType: "Lichida",
              coolingLedColor: "No",
              coolingPrice: 115,
            },
            {
              coolingName: "NZXT Kraken 360",
              coolingType: "Lichida",
              coolingLedColor: "No",
              coolingPrice: 204,
            },
          ],
          motherboard: [
            {
              motherboardName: "Gigabyte Z690M DS3H DDR4",
              motherboardType: "Z690M",
              motherboardPrice: 140,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "AQIRYS Pulsar",
                    sourceType: "80 Plus Bronze",
                    soursePower: "750W",
                    sourcePrice: 75,
                  },

                  {
                    sourceName: "AQIRYS Magnetar",
                    sourceType: "80 PLUS Gold",
                    soursePower: "850W",
                    sourcePrice: 140,
                  },
                  {
                    sourceName: "Thermaltake Smart RGB",
                    sourceType: "80 PLUS",
                    soursePower: "700W",
                    sourcePrice: 80,
                  },
                  {
                    sourceName: "Corsair RM850e",
                    sourceType: "80 Plus Gold",
                    soursePower: "850W",
                    sourcePrice: 165,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "MSI GeForce RTX 4060 Ti GAMING",
                    videoCardType: "RTX 4060",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 525,
                  },
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },

                  {
                    videoCardName:
                      "ASUS TUF Gaming Radeon™ RX 7700 XT OC Edition",
                    videoCardType: "RX 7700 XT",
                    videoCardMemory: "12GB GDDR6",
                    videoCardBit: "192-bit",
                    videoCardPrice: 650,
                  },
                  {
                    videoCardName:
                      "Gigabyte nVidia GeForce RTX 4060 Ti Gaming OC",
                    videoCardType: "RTX 4060 Ti",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 550,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "AMD Ryzen™ 5 5500",
                    processorType: "5 5500",
                    processorSpeed: "4.2GHz",
                    processorPrice: 100,
                  },

                  {
                    processorName: "AMD Ryzen™ 7 7800X3D",
                    processorType: "7 7800X3D",
                    processorSpeed: "4.2/5.0GHz Max Boost",
                    processorPrice: 400,
                  },
                  {
                    processorName: "Intel Core i7 8700K",
                    processorType: "i7 8700K",
                    processorSpeed: "3.7 GHz",
                    processorPrice: 420,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO",
                    memoryRamType: "DDR4, 3600MHz",
                    memoryRamSpace: "64GB",
                    memoryRamPrice: 190,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Kingston FURY Beast",
                    memoryRamType: "DDR5, 5200MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 120,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "HDD WD Blue",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "5400rpm",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 50,
                  },
                  {
                    storageMemoryName:
                      "HDD Seagate Constellation ES.3 ST2000NM0011",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "7200rpm",
                    storageMemoryCapacity: "2TB",
                    storageMemoryPrice: 85,
                  },
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "3500 MB/s",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 40,
                  },
                  {
                    storageMemoryName:
                      "Solid-State Drive (SSD) WD Black SN750 NVMe",
                    storageMemoryType: "M.2",
                    storageMemorySpeed: "	3470 MB/s",
                    storageMemoryCapacity: "500GB",
                    storageMemoryPrice: 45,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Razer BlackWidow V3 Mini",
                      keyboardType: "wire",
                      keyboardPrice: 120,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech G PRO LightSpeed Hero",
                      mouseType: "wireless",
                      mousePrice: 60,
                    },
                    {
                      mouseName: "Razer DeathAdder Essential 2021",
                      mouseType: "wire",
                      mousePrice: 22,
                    },
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Sonos One SL",
                      speakersType: "wireless",
                      speakersPrice: 165,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                    {
                      mousepadName: "Logitech G640 L",
                      mousepadDimension: "460 x 400 x 3 mm",
                      mousepadPrice: 30,
                    },
                  ],
                },
              },
            },
            {
              motherboardName: "Gigabyte B550 GAMING X V2",
              motherboardType: "B550",
              motherboardPrice: 110,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "AQIRYS Pulsar",
                    sourceType: "80 Plus Bronze",
                    soursePower: "750W",
                    sourcePrice: 75,
                  },
                  {
                    sourceName: "Gigabyte UD750GM  ",
                    sourceType: "80 PLUS Gold",
                    soursePower: "750W",
                    sourcePrice: 95,
                  },
                  {
                    sourceName: "Corsair RM850e",
                    sourceType: "80 Plus Gold",
                    soursePower: "850W",
                    sourcePrice: 165,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "MSI GeForce RTX 4060 Ti GAMING",
                    videoCardType: "RTX 4060",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 525,
                  },
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },
                  {
                    videoCardName:
                      "Gigabyte nVidia GeForce RTX 4060 Ti Gaming OC",
                    videoCardType: "RTX 4060 Ti",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 550,
                  },
                ],
                processor: [
                  {
                    processorName: "AMD Ryzen™ 7 7800X3D",
                    processorType: "7 7800X3D",
                    processorSpeed: "4.2/5.0GHz Max Boost",
                    processorPrice: 400,
                  },
                  {
                    processorName: "Intel Core i7 8700K",
                    processorType: "i7 8700K",
                    processorSpeed: "3.7 GHz",
                    processorPrice: 420,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO",
                    memoryRamType: "DDR4, 3600MHz",
                    memoryRamSpace: "64GB",
                    memoryRamPrice: 190,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "HDD WD Blue",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "5400rpm",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 50,
                  },
                  {
                    storageMemoryName:
                      "HDD Seagate Constellation ES.3 ST2000NM0011",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "7200rpm",
                    storageMemoryCapacity: "2TB",
                    storageMemoryPrice: 85,
                  },
                  {
                    storageMemoryName:
                      "Solid-State Drive (SSD) WD Black SN750 NVMe",
                    storageMemoryType: "M.2",
                    storageMemorySpeed: "	3470 MB/s",
                    storageMemoryCapacity: "500GB",
                    storageMemoryPrice: 45,
                  },
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "	3500 MB/s",
                    storageMemoryCapacity: "2TB",
                    storageMemoryPrice: 90,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Razer BlackWidow V3 Mini",
                      keyboardType: "wire",
                      keyboardPrice: 120,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech G PRO LightSpeed Hero",
                      mouseType: "wireless ",
                      mousePrice: 60,
                    },
                    {
                      mouseName: "Razer DeathAdder Essential 2021",
                      mouseType: "wire",
                      mousePrice: 22,
                    },
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Sonos One SL",
                      speakersType: "wireless",
                      speakersPrice: 165,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                    {
                      mousepadName: "Logitech G640 L",
                      mousepadDimension: "460 x 400 x 3 mm",
                      mousepadPrice: 30,
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          modelName: "Gaming Dell R10",
          modelPrice: 600,
          case: [
            {
              caseName: "Segotep Lux S",
              caseLedColor: "RGB & aRGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 6,
              casePrice: 75,
            },
            {
              caseName: "AQIRYS Procyon Black",
              caseLedColor: "ARGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 5,
              casePrice: 175,
            },
            {
              caseName: "AQIRYS Saiph Yellow",
              caseLedColor: "ARGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 4,
              casePrice: 200,
            },
          ],
          cooling: [
            {
              coolingName: "ARCTIC Liquid Freezer II - 206",
              coolingType: "Lichida",
              coolingLedColor: "RGB",
              coolingPrice: 145,
            },
            {
              coolingName: " ARCTIC Liquid Freezer II - 360",
              coolingType: "Lichida",
              coolingLedColor: "No",
              coolingPrice: 115,
            },
            {
              coolingName: "NZXT Kraken 360",
              coolingType: "Lichida",
              coolingLedColor: "No",
              coolingPrice: 204,
            },
          ],
          motherboard: [
            {
              motherboardName: "MSI MPG B550 GAMING PLUS",
              motherboardType: "B550",
              motherboardPrice: 140,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "AQIRYS Pulsar",
                    sourceType: "80 Plus Bronze",
                    soursePower: "750W",
                    sourcePrice: 75,
                  },
                  {
                    sourceName: "Gigabyte UD750GM  ",
                    sourceType: "80 PLUS Gold",
                    soursePower: "750W",
                    sourcePrice: 95,
                  },
                  {
                    sourceName: "AQIRYS Magnetar",
                    sourceType: "80 PLUS Gold",
                    soursePower: "850W",
                    sourcePrice: 140,
                  },
                  {
                    sourceName: "Thermaltake Smart RGB",
                    sourceType: "80 PLUS",
                    soursePower: "700W",
                    sourcePrice: 80,
                  },
                  {
                    sourceName: "Corsair RM850e",
                    sourceType: "80 Plus Gold",
                    soursePower: "850W",
                    sourcePrice: 165,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "MSI GeForce RTX 4060 Ti GAMING",
                    videoCardType: "RTX 4060",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 525,
                  },
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },
                  {
                    videoCardName: "MSI AMD Radeon RX 580 ARMOR 8G OC",
                    videoCardType: "RX 580 ARMOR",
                    videoCardMemory: "8GB DDR5",
                    videoCardBit: "256-bit",
                    videoCardPrice: 175,
                  },
                  {
                    videoCardName:
                      "ASUS TUF Gaming Radeon™ RX 7700 XT OC Edition",
                    videoCardType: "RX 7700 XT",
                    videoCardMemory: "12GB GDDR6",
                    videoCardBit: "192-bit",
                    videoCardPrice: 650,
                  },
                  {
                    videoCardName:
                      "Gigabyte nVidia GeForce RTX 4060 Ti Gaming OC",
                    videoCardType: "RTX 4060 Ti",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 550,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "AMD Ryzen™ 5 5500",
                    processorType: "5 5500",
                    processorSpeed: "4.2GHz",
                    processorPrice: 100,
                  },
                  {
                    processorName: "Intel® Core™ i7-10700F Comet Lake",
                    processorType: "i7-10700F",
                    processorSpeed: "2.9GHz",
                    processorPrice: 210,
                  },
                  {
                    processorName: "AMD Ryzen™ 7 7800X3D",
                    processorType: "7 7800X3D",
                    processorSpeed: "4.2/5.0GHz Max Boost",
                    processorPrice: 400,
                  },
                  {
                    processorName: "Intel Core i7 8700K",
                    processorType: "i7 8700K",
                    processorSpeed: "3.7 GHz",
                    processorPrice: 420,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO",
                    memoryRamType: "DDR4, 3600MHz",
                    memoryRamSpace: "64GB",
                    memoryRamPrice: 190,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Kingston FURY Beast",
                    memoryRamType: "DDR5, 5200MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 120,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO 2",
                    memoryRamType: "DDR4, 3200Mhz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 90,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "HDD WD Blue",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "5400rpm",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 50,
                  },
                  {
                    storageMemoryName:
                      "HDD Seagate Constellation ES.3 ST2000NM0011",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "7200rpm",
                    storageMemoryCapacity: "2TB",
                    storageMemoryPrice: 85,
                  },
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "3500 MB/s",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 40,
                  },
                  {
                    storageMemoryName:
                      "Solid-State Drive (SSD) WD Black SN750 NVMe",
                    storageMemoryType: "M.2",
                    storageMemorySpeed: "	3470 MB/s",
                    storageMemoryCapacity: "500GB",
                    storageMemoryPrice: 45,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Razer BlackWidow V3 Mini",
                      keyboardType: "wire",
                      keyboardPrice: 120,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech G PRO LightSpeed Hero",
                      mouseType: "wireless ",
                      mousePrice: 60,
                    },
                    {
                      mouseName: "Razer DeathAdder Essential 2021",
                      mouseType: "wire",
                      mousePrice: 22,
                    },
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Sonos One SL",
                      speakersType: "wireless",
                      speakersPrice: 165,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                    {
                      mousepadName: "Logitech G640 L",
                      mousepadDimension: "460 x 400 x 3 mm",
                      mousepadPrice: 30,
                    },
                  ],
                },
              },
            },
            {
              motherboardName: "MSI MPG Z490 GAMING PLUS",
              motherboardType: "Z490",
              motherboardPrice: 160,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "Gigabyte UD750GM  ",
                    sourceType: "80 PLUS Gold",
                    soursePower: "750W",
                    sourcePrice: 95,
                  },
                  {
                    sourceName: "AQIRYS Magnetar",
                    sourceType: "80 PLUS Gold",
                    soursePower: "850W",
                    sourcePrice: 140,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },
                  {
                    videoCardName: "MSI AMD Radeon RX 580 ARMOR 8G OC",
                    videoCardType: "RX 580 ARMOR",
                    videoCardMemory: "8GB DDR5",
                    videoCardBit: "256-bit",
                    videoCardPrice: 175,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "AMD Ryzen™ 5 5500",
                    processorType: "5 5500",
                    processorSpeed: "4.2GHz",
                    processorPrice: 100,
                  },
                  {
                    processorName: "Intel® Core™ i7-10700F Comet Lake",
                    processorType: "i7-10700F",
                    processorSpeed: "2.9GHz",
                    processorPrice: 210,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "3500 MB/s",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 40,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    {
      id: 3,
      brand: "Acer",
      imgSrc: require("assets/images/acer-logo.png"),
      model: [
        {
          modelName: "Gaming Nitro 50",
          modelPrice: 2000,
          case: [
            {
              caseName: "Segotep Lux S",
              caseLedColor: "RGB & aRGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 6,
              casePrice: 75,
            },
            {
              caseName: "AQIRYS Procyon Black",
              caseLedColor: "ARGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 5,
              casePrice: 175,
            },
            {
              caseName: "NZXT H7 Flow",
              caseLedColor: "Violet",
              caseTypeSize: "Middletower",
              caseNumberFans: 7,
              casePrice: 140,
            },
            {
              caseName: "AQIRYS Aquilla",
              caseLedColor: "RGB",
              caseTypeSize: "Middletower",
              caseNumberFans: 4,
              casePrice: 130,
            },
            {
              caseName: "AQIRYS Saiph Yellow",
              caseLedColor: "ARGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 4,
              casePrice: 200,
            },
          ],
          cooling: [
            {
              coolingName: "NZXT Kraken 360",
              coolingType: "Lichida",
              coolingLedColor: "No",
              coolingPrice: 204,
            },
            {
              coolingName: "AK620 Digital” skt. Universal",
              coolingType: "Aer",
              coolingLedColor: "No",
              coolingPrice: 130,
            },
          ],
          motherboard: [
            {
              motherboardName: "ASUS ROG STRIX X570-F GAMING",
              motherboardType: "AMD X570",
              motherboardPrice: 290,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "AQIRYS Pulsar",
                    sourceType: "80 Plus Bronze",
                    soursePower: "750W",
                    sourcePrice: 75,
                  },
                  {
                    sourceName: "Gigabyte UD750GM  ",
                    sourceType: "80 PLUS Gold",
                    soursePower: "750W",
                    sourcePrice: 95,
                  },
                  {
                    sourceName: "AQIRYS Magnetar",
                    sourceType: "80 PLUS Gold",
                    soursePower: "850W",
                    sourcePrice: 140,
                  },
                  {
                    sourceName: "Thermaltake Smart RGB",
                    sourceType: "80 PLUS",
                    soursePower: "700W",
                    sourcePrice: 80,
                  },
                  {
                    sourceName: "Corsair RM850e",
                    sourceType: "80 Plus Gold",
                    soursePower: "850W",
                    sourcePrice: 165,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "MSI GeForce RTX 4060 Ti GAMING",
                    videoCardType: "RTX 4060",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 525,
                  },
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },
                  {
                    videoCardName: "MSI AMD Radeon RX 580 ARMOR 8G OC",
                    videoCardType: "RX 580 ARMOR",
                    videoCardMemory: "8GB DDR5",
                    videoCardBit: "256-bit",
                    videoCardPrice: 175,
                  },
                  {
                    videoCardName:
                      "ASUS TUF Gaming Radeon™ RX 7700 XT OC Edition",
                    videoCardType: "RX 7700 XT",
                    videoCardMemory: "12GB GDDR6",
                    videoCardBit: "192-bit",
                    videoCardPrice: 650,
                  },
                  {
                    videoCardName:
                      "Gigabyte nVidia GeForce RTX 4060 Ti Gaming OC",
                    videoCardType: "RTX 4060 Ti",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 550,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "AMD Ryzen™ 5 5500",
                    processorType: "5 5500",
                    processorSpeed: "4.2GHz",
                    processorPrice: 100,
                  },
                  {
                    processorName: "Intel® Core™ i7-10700F Comet Lake",
                    processorType: "i7-10700F",
                    processorSpeed: "2.9GHz",
                    processorPrice: 210,
                  },
                  {
                    processorName: "AMD Ryzen™ 7 7800X3D",
                    processorType: "7 7800X3D",
                    processorSpeed: "4.2/5.0GHz Max Boost",
                    processorPrice: 400,
                  },
                  {
                    processorName: "Intel Core i7 8700K",
                    processorType: "i7 8700K",
                    processorSpeed: "3.7 GHz",
                    processorPrice: 420,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO",
                    memoryRamType: "DDR4, 3600MHz",
                    memoryRamSpace: "64GB",
                    memoryRamPrice: 190,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Kingston FURY Beast",
                    memoryRamType: "DDR5, 5200MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 120,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO 2",
                    memoryRamType: "DDR4, 3200Mhz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 90,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "HDD WD Blue",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "5400rpm",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 50,
                  },
                  {
                    storageMemoryName:
                      "HDD Seagate Constellation ES.3 ST2000NM0011",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "7200rpm",
                    storageMemoryCapacity: "2TB",
                    storageMemoryPrice: 85,
                  },
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "3500 MB/s",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 40,
                  },
                  {
                    storageMemoryName:
                      "Solid-State Drive (SSD) WD Black SN750 NVMe",
                    storageMemoryType: "M.2",
                    storageMemorySpeed: "	3470 MB/s",
                    storageMemoryCapacity: "500GB",
                    storageMemoryPrice: 45,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Razer BlackWidow V3 Mini",
                      keyboardType: "wire",
                      keyboardPrice: 120,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech G PRO LightSpeed Hero",
                      mouseType: "wireless ",
                      mousePrice: 60,
                    },
                    {
                      mouseName: "Razer DeathAdder Essential 2021",
                      mouseType: "wire",
                      mousePrice: 22,
                    },
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Sonos One SL",
                      speakersType: "wireless",
                      speakersPrice: 165,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                    {
                      mousepadName: "Logitech G640 L",
                      mousepadDimension: "460 x 400 x 3 mm",
                      mousepadPrice: 30,
                    },
                  ],
                },
              },
            },
            {
              motherboardName: "MSI MPG Z490 GAMING PLUS",
              motherboardType: "Z490",
              motherboardPrice: 160,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "AQIRYS Pulsar",
                    sourceType: "80 Plus Bronze",
                    soursePower: "750W",
                    sourcePrice: 75,
                  },
                  {
                    sourceName: "Gigabyte UD750GM  ",
                    sourceType: "80 PLUS Gold",
                    soursePower: "750W",
                    sourcePrice: 95,
                  },
                  {
                    sourceName: "AQIRYS Magnetar",
                    sourceType: "80 PLUS Gold",
                    soursePower: "850W",
                    sourcePrice: 140,
                  },
                  {
                    sourceName: "Thermaltake Smart RGB",
                    sourceType: "80 PLUS",
                    soursePower: "700W",
                    sourcePrice: 80,
                  },
                  {
                    sourceName: "Corsair RM850e",
                    sourceType: "80 Plus Gold",
                    soursePower: "850W",
                    sourcePrice: 165,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "MSI GeForce RTX 4060 Ti GAMING",
                    videoCardType: "RTX 4060",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 525,
                  },
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },
                  {
                    videoCardName: "MSI AMD Radeon RX 580 ARMOR 8G OC",
                    videoCardType: "RX 580 ARMOR",
                    videoCardMemory: "8GB DDR5",
                    videoCardBit: "256-bit",
                    videoCardPrice: 175,
                  },
                  {
                    videoCardName:
                      "ASUS TUF Gaming Radeon™ RX 7700 XT OC Edition",
                    videoCardType: "RX 7700 XT",
                    videoCardMemory: "12GB GDDR6",
                    videoCardBit: "192-bit",
                    videoCardPrice: 650,
                  },
                  {
                    videoCardName:
                      "Gigabyte nVidia GeForce RTX 4060 Ti Gaming OC",
                    videoCardType: "RTX 4060 Ti",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 550,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "AMD Ryzen™ 5 5500",
                    processorType: "5 5500",
                    processorSpeed: "4.2GHz",
                    processorPrice: 100,
                  },
                  {
                    processorName: "Intel® Core™ i7-10700F Comet Lake",
                    processorType: "i7-10700F",
                    processorSpeed: "2.9GHz",
                    processorPrice: 210,
                  },
                  {
                    processorName: "AMD Ryzen™ 7 7800X3D",
                    processorType: "7 7800X3D",
                    processorSpeed: "4.2/5.0GHz Max Boost",
                    processorPrice: 400,
                  },
                  {
                    processorName: "Intel Core i7 8700K",
                    processorType: "i7 8700K",
                    processorSpeed: "3.7 GHz",
                    processorPrice: 420,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO",
                    memoryRamType: "DDR4, 3600MHz",
                    memoryRamSpace: "64GB",
                    memoryRamPrice: 190,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Kingston FURY Beast",
                    memoryRamType: "DDR5, 5200MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 120,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO 2",
                    memoryRamType: "DDR4, 3200Mhz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 90,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "HDD WD Blue",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "5400rpm",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 50,
                  },
                  {
                    storageMemoryName:
                      "HDD Seagate Constellation ES.3 ST2000NM0011",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "7200rpm",
                    storageMemoryCapacity: "2TB",
                    storageMemoryPrice: 85,
                  },
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "3500 MB/s",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 40,
                  },
                  {
                    storageMemoryName:
                      "Solid-State Drive (SSD) WD Black SN750 NVMe",
                    storageMemoryType: "M.2",
                    storageMemorySpeed: "	3470 MB/s",
                    storageMemoryCapacity: "500GB",
                    storageMemoryPrice: 45,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Razer BlackWidow V3 Mini",
                      keyboardType: "wire",
                      keyboardPrice: 120,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech G PRO LightSpeed Hero",
                      mouseType: "wireless ",
                      mousePrice: 60,
                    },
                    {
                      mouseName: "Razer DeathAdder Essential 2021",
                      mouseType: "wire",
                      mousePrice: 22,
                    },
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Sonos One SL",
                      speakersType: "wireless",
                      speakersPrice: 165,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                    {
                      mousepadName: "Logitech G640 L",
                      mousepadDimension: "460 x 400 x 3 mm",
                      mousepadPrice: 30,
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          modelName: "Gaming Predator Orion 5000",
          modelPrice: 2500,
          case: [
            {
              caseName: "AQIRYS Procyon Black",
              caseLedColor: "ARGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 5,
              casePrice: 175,
            },
            {
              caseName: "AQIRYS Aquilla",
              caseLedColor: "RGB",
              caseTypeSize: "Middletower",
              caseNumberFans: 4,
              casePrice: 130,
            },
            {
              caseName: "AQIRYS Saiph Yellow",
              caseLedColor: "ARGB",
              caseTypeSize: "MiddleTower",
              caseNumberFans: 4,
              casePrice: 200,
            },
          ],
          cooling: [
            {
              coolingName: "ARCTIC Liquid Freezer II - 206",
              coolingType: "Lichida",
              coolingLedColor: "RGB",
              coolingPrice: 145,
            },
            {
              coolingName: "Noctua NH-D15",
              coolingType: "Aer",
              coolingLedColor: "No",
              coolingPrice: 110,
            },
            {
              coolingName: " ARCTIC Liquid Freezer II - 360",
              coolingType: "Lichida",
              coolingLedColor: "No",
              coolingPrice: 115,
            },
            {
              coolingName: "NZXT Kraken 360",
              coolingType: "Lichida",
              coolingLedColor: "No",
              coolingPrice: 204,
            },
            {
              coolingName: "AK620 Digital” skt. Universal",
              coolingType: "Aer",
              coolingLedColor: "No",
              coolingPrice: 130,
            },
          ],
          motherboard: [
            {
              motherboardName: "ASUS ROG STRIX X570-F GAMING",
              motherboardType: "AMD X570",
              motherboardPrice: 290,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "AQIRYS Pulsar",
                    sourceType: "80 Plus Bronze",
                    soursePower: "750W",
                    sourcePrice: 75,
                  },

                  {
                    sourceName: "AQIRYS Magnetar",
                    sourceType: "80 PLUS Gold",
                    soursePower: "850W",
                    sourcePrice: 140,
                  },
                  {
                    sourceName: "Thermaltake Smart RGB",
                    sourceType: "80 PLUS",
                    soursePower: "700W",
                    sourcePrice: 80,
                  },
                  {
                    sourceName: "Corsair RM850e",
                    sourceType: "80 Plus Gold",
                    soursePower: "850W",
                    sourcePrice: 165,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "MSI GeForce RTX 4060 Ti GAMING",
                    videoCardType: "RTX 4060",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 525,
                  },
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },

                  {
                    videoCardName:
                      "ASUS TUF Gaming Radeon™ RX 7700 XT OC Edition",
                    videoCardType: "RX 7700 XT",
                    videoCardMemory: "12GB GDDR6",
                    videoCardBit: "192-bit",
                    videoCardPrice: 650,
                  },
                  {
                    videoCardName:
                      "Gigabyte nVidia GeForce RTX 4060 Ti Gaming OC",
                    videoCardType: "RTX 4060 Ti",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 550,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "AMD Ryzen™ 5 5500",
                    processorType: "5 5500",
                    processorSpeed: "4.2GHz",
                    processorPrice: 100,
                  },

                  {
                    processorName: "AMD Ryzen™ 7 7800X3D",
                    processorType: "7 7800X3D",
                    processorSpeed: "4.2/5.0GHz Max Boost",
                    processorPrice: 400,
                  },
                  {
                    processorName: "Intel Core i7 8700K",
                    processorType: "i7 8700K",
                    processorSpeed: "3.7 GHz",
                    processorPrice: 420,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO",
                    memoryRamType: "DDR4, 3600MHz",
                    memoryRamSpace: "64GB",
                    memoryRamPrice: 190,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Kingston FURY Beast",
                    memoryRamType: "DDR5, 5200MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 120,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "HDD WD Blue",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "5400rpm",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 50,
                  },
                  {
                    storageMemoryName:
                      "HDD Seagate Constellation ES.3 ST2000NM0011",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "7200rpm",
                    storageMemoryCapacity: "2TB",
                    storageMemoryPrice: 85,
                  },
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "3500 MB/s",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 40,
                  },
                  {
                    storageMemoryName:
                      "Solid-State Drive (SSD) WD Black SN750 NVMe",
                    storageMemoryType: "M.2",
                    storageMemorySpeed: "	3470 MB/s",
                    storageMemoryCapacity: "500GB",
                    storageMemoryPrice: 45,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Razer BlackWidow V3 Mini",
                      keyboardType: "wire",
                      keyboardPrice: 120,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech G PRO LightSpeed Hero",
                      mouseType: "wireless ",
                      mousePrice: 60,
                    },
                    {
                      mouseName: "Razer DeathAdder Essential 2021",
                      mouseType: "wire",
                      mousePrice: 22,
                    },
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Sonos One SL",
                      speakersType: "wireless",
                      speakersPrice: 165,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                    {
                      mousepadName: "Logitech G640 L",
                      mousepadDimension: "460 x 400 x 3 mm",
                      mousepadPrice: 30,
                    },
                  ],
                },
              },
            },
            {
              motherboardName: "Gigabyte Z690M DS3H DDR4",
              motherboardType: "Z690M",
              motherboardPrice: 140,

              compatibleComponents: {
                sources: [
                  {
                    sourceName: "AQIRYS Pulsar",
                    sourceType: "80 Plus Bronze",
                    soursePower: "750W",
                    sourcePrice: 75,
                  },
                  {
                    sourceName: "Gigabyte UD750GM  ",
                    sourceType: "80 PLUS Gold",
                    soursePower: "750W",
                    sourcePrice: 95,
                  },
                  {
                    sourceName: "AQIRYS Magnetar",
                    sourceType: "80 PLUS Gold",
                    soursePower: "850W",
                    sourcePrice: 140,
                  },
                  {
                    sourceName: "Thermaltake Smart RGB",
                    sourceType: "80 PLUS",
                    soursePower: "700W",
                    sourcePrice: 80,
                  },
                  {
                    sourceName: "Corsair RM850e",
                    sourceType: "80 Plus Gold",
                    soursePower: "850W",
                    sourcePrice: 165,
                  },
                ],
                videoCard: [
                  {
                    videoCardName: "MSI GeForce RTX 4060 Ti GAMING",
                    videoCardType: "RTX 4060",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 525,
                  },
                  {
                    videoCardName: "ASUS Dual GeForce® RTX™ 3050 OC",
                    videoCardType: "RTX™ 3050 OC",
                    videoCardMemory: "8GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 280,
                  },
                  {
                    videoCardName: "MSI AMD Radeon RX 580 ARMOR 8G OC",
                    videoCardType: "RX 580 ARMOR",
                    videoCardMemory: "8GB DDR5",
                    videoCardBit: "256-bit",
                    videoCardPrice: 175,
                  },
                  {
                    videoCardName:
                      "ASUS TUF Gaming Radeon™ RX 7700 XT OC Edition",
                    videoCardType: "RX 7700 XT",
                    videoCardMemory: "12GB GDDR6",
                    videoCardBit: "192-bit",
                    videoCardPrice: 650,
                  },
                  {
                    videoCardName:
                      "Gigabyte nVidia GeForce RTX 4060 Ti Gaming OC",
                    videoCardType: "RTX 4060 Ti",
                    videoCardMemory: "16GB GDDR6",
                    videoCardBit: "128-bit",
                    videoCardPrice: 550,
                  },
                ],
                processor: [
                  {
                    processorName: "Intel® Core™ i7-13700K Raptor Lake",
                    processorType: "i7-13700K",
                    processorSpeed: "3.4GHz, 5.4 GHz turbo",
                    processorPrice: 500,
                  },
                  {
                    processorName: "AMD Ryzen™ 5 5500",
                    processorType: "5 5500",
                    processorSpeed: "4.2GHz",
                    processorPrice: 100,
                  },
                  {
                    processorName: "Intel® Core™ i7-10700F Comet Lake",
                    processorType: "i7-10700F",
                    processorSpeed: "2.9GHz",
                    processorPrice: 210,
                  },
                  {
                    processorName: "AMD Ryzen™ 7 7800X3D",
                    processorType: "7 7800X3D",
                    processorSpeed: "4.2/5.0GHz Max Boost",
                    processorPrice: 400,
                  },
                  {
                    processorName: "Intel Core i7 8700K",
                    processorType: "i7 8700K",
                    processorSpeed: "3.7 GHz",
                    processorPrice: 420,
                  },
                ],
                memoryRam: [
                  {
                    memoryRamName: "Korg EXB 256MB Sample-RAM",
                    memoryRamType: "Sample",
                    memoryRamSpace: "256MB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO",
                    memoryRamType: "DDR4, 3600MHz",
                    memoryRamSpace: "64GB",
                    memoryRamPrice: 190,
                  },
                  {
                    memoryRamName: "Kingston Fury Beast RGB",
                    memoryRamType: "DDR5, 5600MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 125,
                  },
                  {
                    memoryRamName: "Kingston FURY Beast",
                    memoryRamType: "DDR5, 5200MHz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 120,
                  },
                  {
                    memoryRamName: "Corsair Vengeance RGB PRO 2",
                    memoryRamType: "DDR4, 3200Mhz",
                    memoryRamSpace: "32GB",
                    memoryRamPrice: 90,
                  },
                ],
                storageMemory: [
                  {
                    storageMemoryName: "HDD WD Blue",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "5400rpm",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 50,
                  },
                  {
                    storageMemoryName:
                      "HDD Seagate Constellation ES.3 ST2000NM0011",
                    storageMemoryType: "SATA III",
                    storageMemorySpeed: "7200rpm",
                    storageMemoryCapacity: "2TB",
                    storageMemoryPrice: 85,
                  },
                  {
                    storageMemoryName: "Solid State Drive (SSD) Kingston NV2",
                    storageMemoryType: "M.2.",
                    storageMemorySpeed: "3500 MB/s",
                    storageMemoryCapacity: "1TB",
                    storageMemoryPrice: 40,
                  },
                  {
                    storageMemoryName:
                      "Solid-State Drive (SSD) WD Black SN750 NVMe",
                    storageMemoryType: "M.2",
                    storageMemorySpeed: "	3470 MB/s",
                    storageMemoryCapacity: "500GB",
                    storageMemoryPrice: 45,
                  },
                ],
                extraComponents: {
                  keyboard: [
                    {
                      keyboardName: "QWERTY - Zebra VC80X, VC8300",
                      keyboardType: "wire",
                      keyboardPrice: 500,
                    },
                    {
                      keyboardName: "Razer BlackWidow V3 Mini",
                      keyboardType: "wire",
                      keyboardPrice: 120,
                    },
                    {
                      keyboardName: "Logitech G915 TKL",
                      keyboardType: "wireless",
                      keyboardPrice: 185,
                    },
                  ],
                  mouse: [
                    {
                      mouseName: "Logitech G PRO LightSpeed Hero",
                      mouseType: "wireless ",
                      mousePrice: 60,
                    },
                    {
                      mouseName: "Razer DeathAdder Essential 2021",
                      mouseType: "wire",
                      mousePrice: 22,
                    },
                    {
                      mouseName: "Logitech Lightspeed G502 X Plus",
                      mouseType: "wireless ",
                      mousePrice: 125,
                    },
                  ],
                  speakers: [
                    {
                      speakersName: "Logitech 2.0 Z200",
                      speakersType: "wire",
                      speakersPrice: 35,
                    },
                    {
                      speakersName: "Sonos One SL",
                      speakersType: "wireless",
                      speakersPrice: 165,
                    },
                    {
                      speakersName: "Serioux Blys X167 2.0",
                      speakersType: "wireless",
                      speakersPrice: 17,
                    },
                  ],
                  mousepad: [
                    {
                      mousepadName: "Razer Goliathus Chroma Extended",
                      mousepadDimension: "294 x 920 x 3 mm",
                      mousepadPrice: 55,
                    },
                    {
                      mousepadName: "Logitech G640 L",
                      mousepadDimension: "460 x 400 x 3 mm",
                      mousepadPrice: 30,
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  ],

  dataStepOne: [],
  dataRestOfSteps: [],
  dataFilterResults: {
    processor: [],
    videoCard: [],
    keyboard: [],
    mouse: [],
    speakers: [],
    mousepad: [],
  },

  finalPrice: {
    stepOne: 0,
    stepTwo: 0,
    stepThree: 0,
    stepFour: 0,
    stepFive: 0,
    stepSix: 0,
    currentPrice: 0,
  },

  dataFinal: {
    brand: "",
    model: {},
    case: {},
    cooling: {},
    motherboard: {},
    source: {},
    videoCard: {},
    processor: {},
    memoryRam: {},
    storageMemory: {},
    extraComponents: {
      keyboard: { keyboardPrice: 0 },
      mouse: { mousePrice: 0 },
      speakers: { speakersPrice: 0 },
      mousepad: { mousepadPrice: 0 },
    },
  },
});

export const getters = {
  getDataInitial(state) {
    return state.dataInitial;
  },

  getDataStepOne(state) {
    return state.dataStepOne;
  },

  getDataRestOfSteps(state) {
    return state.dataRestOfSteps;
  },

  getStepFourFilters(state) {
    return state.dataFilterResults;
  },

  getStepSixFilters(state) {
    return state.dataFilterResults;
  },

  getDataFinal(state) {
    return state.dataFinal;
  },

  getFinalPrice(state) {
    return state.finalPrice;
  },
};

export const mutations = {
  setData: (state, item) => (state.dataInitial = item),

  setDataStepOne(state, stepData) {
    if (stepData.step) {
      state.finalPrice.stepOne = stepData.model.price;
      state.finalPrice.currentPrice = state.finalPrice.stepOne;

      state.dataFinal.brand = stepData.brand;
      state.dataFinal.model = stepData.model;

      state.dataInitial.map((element) => {
        if (element.brand === state.dataFinal.brand) {
          element.model.map((el) => {
            if (el.modelName === state.dataFinal.model.name) {
              state.dataStepOne = [];
              state.dataStepOne.push(el);
            }
          });
        }
      });
    } else {
      state.dataFinal.brand = "";
      state.dataFinal.model = {};
      state.finalPrice.stepOne = 0;
      state.finalPrice.currentPrice = 0;
    }
  },

  setDataStepTwo(state, stepData) {
    if (stepData.step) {
      state.finalPrice.stepTwo =
        stepData.case.casePrice +
        stepData.cooling.coolingPrice +
        stepData.motherboard.motherboardPrice;
      state.finalPrice.currentPrice += state.finalPrice.stepTwo;

      state.dataFinal.case = stepData.case;
      state.dataFinal.cooling = stepData.cooling;
      state.dataFinal.motherboard = stepData.motherboard;

      state.dataStepOne.map((element) => {
        element.motherboard.map((el) => {
          if (
            el.motherboardName === state.dataFinal.motherboard.motherboardName
          ) {
            state.dataRestOfSteps = [];
            state.dataRestOfSteps.push(el.compatibleComponents);
          }
        });
      });
    } else {
      state.dataFinal.case = {};
      state.dataFinal.cooling = {};
      state.dataFinal.motherboard = {};

      state.finalPrice.currentPrice =
        state.finalPrice.currentPrice - state.finalPrice.stepTwo;
    }
  },

  setDataStepThree(state, stepData) {
    if (stepData.step) {
      state.finalPrice.stepThree = stepData.source.sourcePrice;
      state.finalPrice.currentPrice += state.finalPrice.stepThree;

      state.dataFinal.source = stepData.source;
    } else {
      state.dataFinal.source = {};

      state.finalPrice.currentPrice =
        state.finalPrice.currentPrice - state.finalPrice.stepThree;
    }
  },

  setDataStepFour(state, stepData) {
    if (stepData.step) {
      state.finalPrice.stepFour =
        stepData.videoCard.videoCardPrice + stepData.processor.processorPrice;
      state.finalPrice.currentPrice += state.finalPrice.stepFour;

      state.dataFinal.videoCard = stepData.videoCard;
      state.dataFinal.processor = stepData.processor;
    } else {
      state.dataFinal.videoCard = {};
      state.dataFinal.processor = {};

      state.finalPrice.currentPrice =
        state.finalPrice.currentPrice - state.finalPrice.stepFour;
    }
  },

  stepFourFilters(state, stepFourFiltersValue) {
    if (stepFourFiltersValue === "videoCard") {
      state.dataFilterResults.processor = [];
      state.dataFilterResults.videoCard = [
        ...state.dataRestOfSteps[0].videoCard,
      ];
    } else if (stepFourFiltersValue === "processor") {
      state.dataFilterResults.videoCard = [];
      state.dataFilterResults.processor = [
        ...state.dataRestOfSteps[0].processor,
      ];
    } else {
      state.dataFilterResults.videoCard = [
        ...state.dataRestOfSteps[0].videoCard,
      ];
      state.dataFilterResults.processor = [
        ...state.dataRestOfSteps[0].processor,
      ];
    }

    return state.dataFilterResults;
  },

  setDataStepFive(state, stepData) {
    if (stepData.step) {
      state.finalPrice.stepFive =
        stepData.memoryRam.memoryRamPrice +
        stepData.storageMemory.storageMemoryPrice;
      state.finalPrice.currentPrice += state.finalPrice.stepFive;

      state.dataFinal.memoryRam = stepData.memoryRam;
      state.dataFinal.storageMemory = stepData.storageMemory;
    } else {
      state.dataFinal.memoryRam = {};
      state.dataFinal.storageMemory = {};

      state.finalPrice.currentPrice =
        state.finalPrice.currentPrice - state.finalPrice.stepFive;
    }
  },

  setDataStepSix(state, stepData) {
    state.finalPrice.stepSix =
      stepData.keyboard.keyboardPrice +
      stepData.mouse.mousePrice +
      stepData.speakers.speakersPrice +
      stepData.mousepad.mousepadPrice;
    state.finalPrice.currentPrice += state.finalPrice.stepSix;

    state.dataFinal.extraComponents.keyboard = stepData.keyboard;
    state.dataFinal.extraComponents.mouse = stepData.mouse;
    state.dataFinal.extraComponents.speakers = stepData.speakers;
    state.dataFinal.extraComponents.mousepad = stepData.mousepad;
  },

  stepSixFilters(state, stepFourFiltersValue) {
    if (stepFourFiltersValue === "keyboard") {
      state.dataFilterResults.mousepad = [];
      state.dataFilterResults.mouse = [];
      state.dataFilterResults.speakers = [];
      state.dataFilterResults.keyboard = [
        ...state.dataRestOfSteps[0].extraComponents.keyboard,
      ];
    } else if (stepFourFiltersValue === "mouse") {
      state.dataFilterResults.mousepad = [];
      state.dataFilterResults.keyboard = [];
      state.dataFilterResults.speakers = [];
      state.dataFilterResults.mouse = [
        ...state.dataRestOfSteps[0].extraComponents.mouse,
      ];
    } else if (stepFourFiltersValue === "speakers") {
      state.dataFilterResults.mousepad = [];
      state.dataFilterResults.mouse = [];
      state.dataFilterResults.keyboard = [];
      state.dataFilterResults.speakers = [
        ...state.dataRestOfSteps[0].extraComponents.speakers,
      ];
    } else if (stepFourFiltersValue === "mousepad") {
      state.dataFilterResults.keyboard = [];
      state.dataFilterResults.mouse = [];
      state.dataFilterResults.speakers = [];
      state.dataFilterResults.mousepad = [
        ...state.dataRestOfSteps[0].extraComponents.mousepad,
      ];
    } else {
      state.dataFilterResults.keyboard = [
        ...state.dataRestOfSteps[0].extraComponents.keyboard,
      ];
      state.dataFilterResults.mouse = [
        ...state.dataRestOfSteps[0].extraComponents.mouse,
      ];
      state.dataFilterResults.speakers = [
        ...state.dataRestOfSteps[0].extraComponents.speakers,
      ];
      state.dataFilterResults.mousepad = [
        ...state.dataRestOfSteps[0].extraComponents.mousepad,
      ];
    }

    return state.dataFilterResults;
  },

  setResetData(state, resetData) {
    state.dataFinal = resetData;
    state.finalPrice.currentPrice = 0;
  },
};

export const actions = {
  formStepOne({ commit, dispatch, state }, stepData) {
    commit("setDataStepOne", stepData);
  },

  formStepTwo({ commit, dispatch, state }, stepData) {
    commit("setDataStepTwo", stepData);
  },

  formStepThree({ commit, dispatch, state }, stepData) {
    commit("setDataStepThree", stepData);
  },

  formStepFour({ commit, dispatch, state }, stepData) {
    commit("setDataStepFour", stepData);
  },

  formStepFive({ commit, dispatch, state }, stepData) {
    commit("setDataStepFive", stepData);
  },

  formStepSix({ commit, dispatch, state }, stepData) {
    commit("setDataStepSix", stepData);
  },

  resetSteps({ commit, dispatch, state }, resetData) {
    commit("setResetData", resetData);
  },

  stepFourFilters({ commit, dispatch, state }, stepFourFiltersValue) {
    commit("stepFourFilters", stepFourFiltersValue);
  },

  stepSixFilters({ commit, dispatch, state }, stepSixFiltersValue) {
    commit("stepSixFilters", stepSixFiltersValue);
  },
};
