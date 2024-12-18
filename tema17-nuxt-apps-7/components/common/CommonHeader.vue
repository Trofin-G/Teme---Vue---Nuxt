<template>
    <nav class="menu">
        <div class="container">
            <div class="menu-header">
                <div class="row">
                    <div class="logo-content">
                        <div class="logo">
                            <a href="/">
                                <img src="../../assets/images/edenred.svg" alt="logo" width="121" height="74" />
                                <img src="../../assets/images/edenred-white.svg" alt="logo" width="121" height="74" />
                            </a>
                        </div>
                    </div>
                    <div class="actions-content">
                        <ul class="actions">
                            <li class="search">
                                <div class="imgs">
                                    <img src="../../assets/images/search-blue.png" alt="search" width="25" height="26" />
                                    <img src="../../assets/images/search-grey.png" alt="search" width="25" height="26" />
                                </div>
                                <div class="search-content">
                                    <div class="icon">
                                        <img src="../../assets/images/search-blue.png" alt="search" width="25"
                                            height="26" />
                                    </div>
                                    <form>
                                        <input type="search" id="search" name="search" title="Caută..."
                                            placeholder="Caută..." />
                                    </form>
                                    <div class="close-search">
                                        <span></span>
                                    </div>
                                    <div class="search-scroll-wrapper">
                                        <div class="search-results-wrapper">
                                            <div class="search-show-more">
                                                <a href="#" class="bt bt-light-blue"> Afișează mai multe rezultate </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="toggle-menu">
                                <button>
                                    <span class="hamburger-inner"></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="menu-content">
                <ul>
                    <li class="hover-state has-dropdown">
                        <a href="#" class="link">Companii</a>
                        <div class="dropdown-content">
                            <ul class="dropdown-tabs">
                                <li role="presentation" class="active">
                                    <a href="#c_ceCauti" aria-controls="c_ceCauti" role="tab" data-toggle="tab"> Ce
                                        cauti ? </a>
                                </li>
                                <li role="presentation">
                                    <a href="#c_ceVreiSaFaci" aria-controls="c_ceVreiSaFaci" role="tab" data-toggle="tab">
                                        Ce vrei sa faci ? </a>
                                </li>
                            </ul>
                            <div class="dropdown-tab tab-content">
                                <div class="tab-pane fade in active" id="c_ceCauti">
                                    <div class="links-content">
                                        <div class="left">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Aici link-uri pentru COMPANII - Tab 1
                                                    </a>
                                                    <ul class="level-3">
                                                        <li><a href="#">Level 3 link 1</a></li>
                                                        <li><a href="#">Level 3 link 2</a></li>
                                                        <li><a href="#">Level 3 link 3</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Beneficii extra-salariale </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Cine poate acorda tichete preplatite
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Avantaje pentru companii </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Factura electronica </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Stadiul livrarii prin SMS Alert+ </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Penalizare carduri </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="form-content hidden">
                                        <div class="avatar">
                                            <img src="../../assets/images/white-user-icon.svg" alt="avatar" width="110"
                                                height="110" />
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light-blue">MyEDENRED</a>
                                            </li>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light">Devino partener</a>
                                            </li>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light">Devino client</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="c_ceVreiSaFaci">
                                    <div class="links-content">
                                        <div class="left">
                                            <ul>
                                                <li><a href="#" class="sub-link">Aici link-uri pentru COMPANII - Tab
                                                        2</a></li>
                                                <li><a href="#" class="sub-link">Beneficii extra-salariale</a></li>
                                                <li><a href="#" class="sub-link">Cine poate acorda tichete
                                                        preplatite</a></li>
                                                <li><a href="#" class="sub-link">Avantaje pentru companii</a></li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <ul>
                                                <li><a href="#" class="sub-link">Factura electronica</a></li>
                                                <li><a href="#" class="sub-link">Stadiul livrarii prin SMS Alert+</a>
                                                </li>
                                                <li><a href="#" class="sub-link">Penalizare carduri</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="hover-state has-dropdown">
                        <a href="#" class="link">Comercianți parteneri</a>
                        <div class="dropdown-content">
                            <ul class="dropdown-tabs">
                                <li role="presentation" class="active">
                                    <a href="#cp_ceCauti" aria-controls="cp_ceCauti" role="tab" data-toggle="tab"> Ce
                                        cauti ? </a>
                                </li>
                                <li role="presentation">
                                    <a href="#cp_ceVreiSaFaci" aria-controls="cp_ceVreiSaFaci" role="tab" data-toggle="tab">
                                        Ce vrei sa faci ? </a>
                                </li>
                            </ul>
                            <div class="dropdown-tab tab-content">
                                <div class="tab-pane fade in active" id="cp_ceCauti">
                                    <div class="links-content">
                                        <div class="left">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Aici link-uri pentru CP - Tab 1 </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Beneficii extra-salariale </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Cine poate acorda tichete preplatite
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Avantaje pentru companii </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Factura electronica </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Stadiul livrarii prin SMS Alert+ </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Penalizare carduri </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="form-content hidden">
                                        <div class="avatar">
                                            <img src="../../assets/images/white-user-icon.svg" alt="avatar" width="110"
                                                height="110" />
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light-blue">MyEDENRED</a>
                                            </li>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light">Devino partener</a>
                                            </li>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light">Devino client</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="cp_ceVreiSaFaci">
                                    <div class="links-content">
                                        <div class="left">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Aici link-uri pentru CP - Tab 2 </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Beneficii extra-salariale </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Cine poate acorda tichete preplatite
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Avantaje pentru companii </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Factura electronica </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Stadiul livrarii prin SMS Alert+ </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Penalizare carduri </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="hover-state has-dropdown">
                        <a href="#" class="link">Utilizatori carduri</a>
                        <div class="dropdown-content">
                            <ul class="dropdown-tabs">
                                <li role="presentation" class="active">
                                    <a href="#uc_ceCauti" aria-controls="uc_ceCauti" role="tab" data-toggle="tab"> Ce
                                        cauti ? </a>
                                </li>
                                <li role="presentation">
                                    <a href="#uc_ceVreiSaFaci" aria-controls="uc_ceVreiSaFaci" role="tab" data-toggle="tab">
                                        Ce vrei sa faci ? </a>
                                </li>
                            </ul>
                            <div class="dropdown-tab tab-content">
                                <div class="tab-pane fade in active" id="uc_ceCauti">
                                    <div class="links-content">
                                        <div class="left">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Aici link-uri pentru UC - Tab 1 </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Beneficii extra-salariale </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Cine poate acorda tichete preplatite
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Avantaje pentru companii </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Factura electronica </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Stadiul livrarii prin SMS Alert+ </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Penalizare carduri </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="form-content hidden">
                                        <div class="avatar">
                                            <img src="../../assets/images/white-user-icon.svg" alt="avatar" width="110"
                                                height="110" />
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light-blue">MyEDENRED</a>
                                            </li>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light">Devino partener</a>
                                            </li>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light">Devino client</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="uc_ceVreiSaFaci">
                                    <div class="links-content">
                                        <div class="left">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Aici link-uri pentru UC - Tab 2 </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Beneficii extra-salariale </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Cine poate acorda tichete preplatite
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Avantaje pentru companii </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Factura electronica </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Stadiul livrarii prin SMS Alert+ </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Penalizare carduri </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="hover-state has-dropdown">
                        <a href="#" class="link">Soluțiile Edenred</a>
                        <div class="dropdown-content">
                            <ul class="dropdown-tabs">
                                <li role="presentation" class="active">
                                    <a href="#se_ceCauti" aria-controls="se_ceCauti" role="tab" data-toggle="tab"> Ce
                                        cauti ? </a>
                                </li>
                                <li role="presentation">
                                    <a href="#se_ceVreiSaFaci" aria-controls="se_ceVreiSaFaci" role="tab" data-toggle="tab">
                                        Ce vrei sa faci ? </a>
                                </li>
                            </ul>
                            <div class="dropdown-tab tab-content">
                                <div class="tab-pane fade in active" id="se_ceCauti">
                                    <div class="links-content">
                                        <div class="left">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Aici link-uri pentru SE - Tab 1 </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Beneficii extra-salariale </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Cine poate acorda tichete preplatite
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Avantaje pentru companii </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Factura electronica </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Stadiul livrarii prin SMS Alert+ </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Penalizare carduri </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="form-content hidden">
                                        <div class="avatar">
                                            <img src="../../assets/images/white-user-icon.svg" alt="avatar" width="110"
                                                height="110" />
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light-blue">MyEDENRED</a>
                                            </li>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light">Devino partener</a>
                                            </li>
                                            <li>
                                                <a href="#" class="bt bt-block bt-light">Devino client</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="se_ceVreiSaFaci">
                                    <div class="links-content">
                                        <div class="left">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Aici link-uri pentru SE - Tab 2 </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Beneficii extra-salariale </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Cine poate acorda tichete preplatite
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Avantaje pentru companii </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <ul>
                                                <li>
                                                    <a href="#" class="sub-link"> Factura electronica </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Stadiul livrarii prin SMS Alert+ </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sub-link"> Penalizare carduri </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="hover-state custom-margin">
                        <a href="#" class="link">Contact</a>
                    </li>
                    <li class="language">
                        <div class="dropdown language-dropdown">
                            <button type="button" class="dropdown-toggle" id="languageDropdown"
                                data-toggle="dropdown">RO</button>
                            <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                                <li class="active"><a href="#">RO</a></li>
                                <li><a href="#">EN</a></li>
                                <li><a href="#">HU</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="offer-actions">
                        <ul>
                            <li><a href="#" class="bt bt-block bt-light-blue">MyEDENRED</a></li>
                            <li><a href="#" class="bt bt-block bt-light">Devino partener</a></li>
                            <li><a href="#" class="bt bt-block bt-light">Devino client</a></li>
                        </ul>
                    </li>
                    <li class="hover-state has-dropdown second-menu">
                        <button>
                            <span class="hamburger-inner"></span>
                        </button>
                        <div class="dropdown-content">
                            <div>
                                <ul class="second-menu-links">
                                    <li><a href="#">Despre noi</a></li>
                                    <li><a href="#">Retea parteneri</a></li>
                                    <li><a href="#">Promotii</a></li>
                                    <li><a href="#">Campanii</a></li>
                                    <li><a href="#">Cariere</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sub-menu" id="testTabs">
            <div class="container"></div>
        </div>
    </nav>
</template>

<script>


export default {

}
</script>