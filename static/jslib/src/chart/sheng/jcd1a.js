var bubu ={ s64:"725.9",s65:"3045.26",s11:"8117.73",s12:"4462.74",s13:"11467.6",s14:"4878.61",s15:"4944.25",s21:"9304.52",s22:"4275.12",s23:"6211.8",s31:"10572.24",s32:"21742.05",s33:"15718.47",s34:"6112.5",s35:"7583.85",s36:"4820.53",s37:"21900.19",s41:"12362.79",s42:"7617.47",s43:"7688.67",s44:"26587.76",s45:"4746.16",s46:"1065.67",s50:"3907.23",s51:"8690.24",s52:"2338.98",s53:"3988.14",s54:"290.76",s61:"4743.61",s62:"2277.35",s63:"648.5" };
var title = "2006年分省GDP总值";
var unit = "元";
function getColor(d) {
    return d > 20000 ? '#800026' :
           d > 11000  ? '#BD0026' :
           d > 8000  ? '#E31A1C' :
           d > 5000  ? '#FC4E2A' :
           d > 4800   ? '#FD8D3C' :
           d > 4000  ? '#FEB24C' :
           d > 1100   ? '#FED976' :
           d > 200   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [200, 1100, 4000, 4800, 5000, 8000, 11000, 20000];