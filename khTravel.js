var app = new Vue({
    el: '#app',
    data: {
        travelData: [],
        ZoneData: [{ "Zipcode": "800", "Zone": "新興區" }, { "Zipcode": "801", "Zone": "前金區" },{ "Zipcode": "802", "Zone": "苓雅區" } ,{ "Zipcode": "803", "Zone": "鹽埕區" }, { "Zipcode": "804", "Zone": "鼓山區" },
        { "Zipcode": "805", "Zone": "旗津區" }, { "Zipcode": "806", "Zone": "前鎮區" }, { "Zipcode": "807", "Zone": "三民區" }, { "Zipcode": "811", "Zone": "楠梓區" },
        { "Zipcode": "812", "Zone": "小港區" }, { "Zipcode": "813", "Zone": "左營區" }, { "Zipcode": "814", "Zone": "仁武區" }, { "Zipcode": "815", "Zone": "大社區" },
        { "Zipcode": "820", "Zone": "岡山區" }, { "Zipcode": "821", "Zone": "路竹區" }, { "Zipcode": "822", "Zone": "阿蓮區" }, { "Zipcode": "823", "Zone": "田寮區" },
        { "Zipcode": "824", "Zone": "燕巢區" }, { "Zipcode": "825", "Zone": "橋頭區" }, { "Zipcode": "826", "Zone": "梓官區" }, { "Zipcode": "827", "Zone": "彌陀區" },
        { "Zipcode": "828", "Zone": "永安區" }, { "Zipcode": "829", "Zone": "湖內區" }, { "Zipcode": "830", "Zone": "鳳山區" }, { "Zipcode": "831", "Zone": "大寮區" },
        { "Zipcode": "832", "Zone": "林園區" }, { "Zipcode": "833", "Zone": "鳥松區" }, { "Zipcode": "840", "Zone": "大樹區" }, { "Zipcode": "842", "Zone": "旗山區" },
        { "Zipcode": "843", "Zone": "美濃區" }, { "Zipcode": "844", "Zone": "六龜區" }, { "Zipcode": "845", "Zone": "內門區" }, { "Zipcode": "846", "Zone": "杉林區" },
        { "Zipcode": "847", "Zone": "甲仙區" }, { "Zipcode": "848", "Zone": "桃源區" }, { "Zipcode": "849", "Zone": "那瑪夏區" }, { "Zipcode": "851", "Zone": "茂林區" },
        { "Zipcode": "852", "Zone": "茄萣區" }],

        area:'',
        temAttraction:{},
        temherf:'',
        
    },


    methods: {
        getAttraction(item){
            // console.log( item)
            const vm = this;
            vm.temAttraction=item;
            
            vm.temherf = "https://www.google.com.tw/maps/place/"+`${item.Add}`
            console.log( vm.temherf)
            $('#productModal').modal('show');



        },
        getTravel: function () {
            const vm = this;

            const api = 'https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c';
            axios.get(api).then(response => {
                //  console.log(response.data.data.XML_Head.Infos.Info);
                vm.travelData = response.data.data.XML_Head.Infos.Info;
                vm.travelData.forEach(function (item) {
                    // console.log(item)
                    for (Zdata in vm.ZoneData) {
    
                        if (item.Zipcode == vm.ZoneData[Zdata].Zipcode) {    
                            item.Zone = vm.ZoneData[Zdata].Zone;                            
                        }
                    }
    
                    
                });
                console.log( vm.travelData )
                return vm.travelData;
            });
        },
    },
    computed: {
        FilteredTravel: function () {
            const vm = this;
            

            if(vm.area == ''){
                return vm.travelData;                
            }else{
                const newTravelData=[];

                vm.travelData.forEach(function (item) {
            
                    if (item.Zone == vm.area ) {
                        newTravelData.push(item);
                    }            
                  });
                  return newTravelData;
            }

          

            // console.log(this.area)            
            
            //  return vm.travelData;
        },
    },
    created() {

        this.getTravel()
    },
});