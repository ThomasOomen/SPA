import { defineStore } from 'pinia'
import axios from 'axios'
import qs from 'qs'

export const useStravaStore = defineStore({
    id: 'strava',

    state: () => ({
        athlete: {},
        activities: {},
        activeActivity: '',
        totalDistance: '',
        rideTypes: {},
        map : '',
        athleteStats: {},
        chart: '',
    }),

    getters: {

        getAthleteInfo(): any {
            return this.athlete
        },

        getActiveActivity(): any {
            return this.activeActivity
        },

        getRideTypes(): any {
            return this.rideTypes
        },

        getActivities(): any {
            return this.activities
        },

        getMap(): any {
            return this.map
        },

        getterAthleteStats(): any {
            return this.athleteStats
        },

        getterChart(): any {
            return this.chart
        }
    }, 

    actions: {

        async getAthlete() {
            console.log('heyooo get athlete')
            await axios.get('http://localhost:5000/get/athlete').then(async response => {
                this.athlete = response.data.data
                await axios.get(
                    'http://localhost:5000/get/athlete/stats',
                    {
                        params: {
                            athleteId: response.data.data.id
                        }
                    }
                    ).then(response =>{
                        this.athleteStats = response.data.data
                }).catch(error => {
                    console.log(error)
                })
            }).catch(error => {
                console.log(error)
            })
        },

        async getAllActivities() {
            // this.activities = [
            //     {"achievement_count":0,"athlete":{"id":43291548,"resource_state":1},"athlete_count":1,"average_speed":1.665,"comment_count":0,"commute":false,"display_hide_heartrate_option":false,"distance":18450.1,"elapsed_time":18931,"elev_high":75,"elev_low":16.4,"end_latlng":[39.47266275063157,-0.37721866741776466],"external_id":"aa50f5cb-3ca6-4cd1-b893-9b35120a86fc-activity.fit","flagged":false,"from_accepted_tag":false,"gear_id":null,"has_heartrate":false,"has_kudoed":false,"heartrate_opt_out":false,"id":7865788581,"kudos_count":1,"location_city":null,"location_country":null,"location_state":null,"manual":false,"map":{"id":"a7865788581","resource_state":2,"summary_polyline":"ox|oFn}hAw@b@{B`DTjE]vBa@\\GjC?dCZv@[nBk@^Ut@[@RVElAZv@?fBZ\\n@dH]bA?`@n@jBwBpBsGdEc@j@oAOMmA_@c@QaA[?dAdCRbEz@t@^t@Kj@RpAn@hApBlGZhBrBjF\\lBtAvCbAvE`@vCGd@XxF|@|C^zFfAjHMpAp@zA[hCn@fCBdB_Dx@SfEc@dA}AjAaCPWSW{@a@SyF~@kB~@i@dAcB\\}BtAsGLyDtCYt@S`C}BjLW~@o@~@IxCa@fBEdBcAxBq@hDyDbJeC~EEVPbAKl@w@zA_Al@qApC_DvD_@lBDvEQpCHxAU~BJrBKrEv@~CtCrELjAn@hAA^bA~@d@|@PBbEaCxA]lAu@HeB\\gAhA[v@}@z@LYr@It@LbCtElNeCnDg@\\Cv@u@xCgB_Ak@zAc@hBa@rCi@Mu@vAOhCZhBQnB@`AY`CKJS[PABPUhCF\\SxFXVRt@EpAwACE}@c@l@mAe@Kv@uAdD{A~GW`@U_@{Ag@_@_Am@Zi@OY{@q@c@NrBgAuCeB_@_BkAwAqAqCgAm@BsA|Au@TaAfBkBc@oEoB{CWaDsAoBxA}EoBgAx@sCv@eD`BmA[kAwAs@FaA{@]@Wk@a@Ie@w@m@Ua@Bo@_@m@dAe@D[n@iBuBSbBg@fCo@Q@[W]s@\\}@|A_A|De@LYd@B\\g@p@Av@eBzCc@`@k@UWe@QH\\BFPcA~B@l@y@lBkA\\k@pAcDbC[|@{@h@sCeCtAsF]k@Za@DoAPSC_@[c@[@WVmBHmAd@u@ET|BCdAb@r@AbFHtAcAt@@P}CrB}B`EZpAq@h@Ov@SQ\\yAZ@KINGh@Za@|@IpBi@BOTDpB^DT{@Wi@MKLRKBBg@?dABM]MFi@Iv@PIA_@L`@Y_BKvBPmCQbCL}BItB?q@?\\?WnK`EzAlCbBjB|AlCxBjBl@vASk@rBiAtANLg@DVrOeX|EuJ~CaIzCcKbCoLhAoEZs@pBsBP@ILxA_F~GoNlAcBQcA`sBciHISf@ML|@n@m@PV^Gx@q@jA]b@u@jAa@f@aA~Ao@FqBo@aDLu@QeEKy@m@UZc@@oA_@eBHS`@B\\YUyAn@qCI}BP_ACmATu@OgBf@oBDqAdB{Cn@_@"},"max_speed":25.382,"moving_time":11084,"name":"Lunch Walk","photo_count":0,"pr_count":0,"private":false,"resource_state":2,"sport_type":"Walk","start_date":"2022-09-25T09:59:02Z","start_date_local":"2022-09-25T11:59:02Z","start_latlng":[39.47255814447999,-0.37731288000941277],"timezone":"(GMT+01:00) Europe/Madrid","total_elevation_gain":104.4,"total_photo_count":5,"trainer":false,"type":"Walk","upload_id":8405992689,"upload_id_str":"8405992689","utc_offset":7200,"visibility":"everyone"},
            //     {"achievement_count":0,"athlete":{"id":43291548,"resource_state":1},"athlete_count":1,"average_speed":1.781,"comment_count":0,"commute":false,"display_hide_heartrate_option":false,"distance":20899.6,"elapsed_time":12373,"elev_high":24.3,"elev_low":0.7,"end_latlng":[39.472697,-0.377252],"external_id":"91664ed8-eb2e-4698-a693-68e986b3ab3d-activity.fit","flagged":false,"from_accepted_tag":false,"gear_id":null,"has_heartrate":false,"has_kudoed":false,"heartrate_opt_out":false,"id":7828000400,"kudos_count":1,"location_city":null,"location_country":null,"location_state":null,"manual":false,"map":{"id":"a7828000400","resource_state":2,"summary_polyline":"qu|oFlkhA{AmAmCg@g@c@_APc@_AeAs@e@v@OzC[?m@jB@pBYbBJv@EpGT|Bj@b@LjDSxAZx@AxBh@hB^bGXd@Gz@eAOmALLIKRo@Ep@D]@yD_Aq@Pi@a@y@PM_@o@C_As@_CKmCs@a@z@cDpA}@z@Pz@vA`CyAwCo@yC_BwDw@}Co@eGEqBV{GC{CVqB`@w@j@]n@wBtBmD[S_@Vl@i@`FhBdBIh@iBB{@dAq@`C}EGgCrBeDbDgH`CaDtCoATk@HaClCgB~B_CLqA`AGz@kAhBy@`GuFtAk@Tg@lAOnAG\\LdAYvBuBj@CjDgAhBmBhDaAAc@a@_At@KHj@^k@j@?t@x@dA_A@Nh@UpCqBrE{BtBq@XHv@e@jBW~@o@`@PjAuAf@@r@a@p@aAhCqAd@?X_@@o@b@QRi@t@_Dj@a@TcAAgAjAaFr@wArA{@^s@QBFQJ?WE@Oz@wA@i@tAaBf@kAUi@h@qBUUB[hA{AdDuGfBH\\}@z@gAtEjCjAZBVmAnDy@x@SgAaAgACo@e@YIaAc@Yd@mBk@h@Ok@QH{AeAQmANo@wAw@VeA`AsAx@yBHcBf@kAAuBr@sAMa@@_CY{@?yBk@}CPhAkA@K`ALj@[HEj@SFJx@QTXj@QdBuKiCwCcAHqAZ{@TKMqAb@wE_ABcCkA_@XOm@O@BcA_@_APmDl@eBJ{BS{BPkCWgC?cES[IuATu@w@gFeA|@aAQII\\a@C_@_AU?eBg@UgEoE}@uARQCYc@EKW^wDa@g@NiJSUX}@CkAUmAs@u@d@qFk@_F[sAk@}@k@TqAYgGn@}D?_@ToDHR_@S{GIFZtHcGf@Fl@CbEKt@SLH|AsCP?bAgBUFSfERx@WTXJxBOvAL~DM~@]VcCDuQeAaQ_Bi@Hg@f@eCtKuAzJ}DlP{Fx[wLhm@oBzL}Gd]_DlSc@zAe@z@AO]pBq@xAMjCuA`KkA|CFLRBRQEh@yAzEmArB_@~CiAtCq@jGcAtF@WBORv@uA~GS~AJh@dDhBpCj@nC~A|J~D~@fB^G`@p@tB~@C|@m@Re@yAqAaApAHUJ`BS^LPn@fBfAC^NXb@BfF|D~@OxEl@~@_@rCpAp@s@bAf@NKDqAt@k@~ChCbABtAy@Z~@fAlB"},"max_speed":14.52,"moving_time":11735,"name":"Lunch walk","photo_count":0,"pr_count":0,"private":false,"resource_state":2,"sport_type":"Walk","start_date":"2022-09-18T09:41:47Z","start_date_local":"2022-09-18T11:41:47Z","start_latlng":[39.472238,-0.376795],"timezone":"(GMT+01:00) Europe/Madrid","total_elevation_gain":41.6,"total_photo_count":0,"trainer":false,"type":"Walk","upload_id":8363397749,"upload_id_str":"8363397749","utc_offset":7200,"visibility":"everyone"},
            //     {"achievement_count":55,"athlete":{"id":43291548,"resource_state":1},"athlete_count":2,"average_speed":7.734,"comment_count":0,"commute":false,"display_hide_heartrate_option":false,"distance":35097.2,"elapsed_time":4707,"elev_high":35.5,"elev_low":6.6,"end_latlng":[51.835414627566934,5.8019449934363365],"external_id":"245cb50e-1d30-4e69-ad98-68c11ede5b64-activity.fit","flagged":false,"from_accepted_tag":false,"gear_id":null,"has_heartrate":false,"has_kudoed":false,"heartrate_opt_out":false,"id":7271834415,"kudos_count":1,"location_city":null,"location_country":null,"location_state":null,"manual":false,"map":{"id":"a7271834415","resource_state":2,"summary_polyline":"}ak{Huelb@IPA`@t@c@FqAqAsDwA?yBgCp@sBMoBFeAi@{CcA_BCwEcEoCwG}C_A{@iAiBuAkAgAOmCmAeCc@uBqAiEuDG_@Lq@Sk@y_@uXaFaDmG_DmHgGyHoFeAmAY}@m@GoAgAaB[wAqAcIuEiAGu@rBcF`H_@tABhJd@`Lq@xQ}@zEk@~@eJvGmF`LcE~KWtAC|Az@rLDvEo@vGmBpIo@vAeB|@e@`AyBrKqBrMgAlEaBrIoD~EsCB_Ab@kArAOz@H|CKfCw@~D_BvDeApEa@zCsA~BoCjKk@|DkDpGwBrCc@`Ba@jK_CvViAdEAtGm@fDLfC?xDf@tCHtDa@jOkB|PqCbHObAHzHEvL_ApDMxAHbAp@fCG`GOtAcAxBQtA?dHz@hEAlGaAfMFjBh@lEtAzA?rFn@fA~@tFpDjJpF|Un@|AaH_@aIkF{DeBiGyAag@cPoVqIsFuCaDaCcDeDaGgJgC{GqCaNNw@`BOpObCz@`AzIpObC`Dj@Cb@c@`@qAbBsMXsAn@eA|Aq@d@gAx@iIlAsIzDuQ^oCFoEa@cE{@sB_D}E{BuHa@gF@qFfAaIrAkEhBiC~DuCVy@gAqMc@mTHsG\\cFdBgIfGiPxGcTtBcF^mALoAAYY_@}DaAaAm@qC}DaPqNeCwAMk@V_BD_ETaBjFsT`AsEzG}y@`DoNdCeVlA{HXwOEsLHuL\\kN[uFk@{CuCaI{C}FF}@nCuEFi@Gk@gAmBaFoOwDqNaAiKY{AkFeLc@sBJ_@vHqDrHcGnCkDjDeHt@YVkAt@sAbHiHzHqFjKsChBYlHKbAFt@h@n@g@jE_@vB_AjBeBtJ}KhLgLxBsCnCyEZQp@{A~AuAdHm@nD^|Gm@LaAs@uFb@_EIuDPaA`CuEpEkE~MePbB_BzEeD|LcGhc@{QtE}A|Ba@`AFlAl@h@fCmApF{@fC{@vHWDW[_@kHo@eC{@mAcBSw@^i@bAUpAy@dJeAbBQt@eAhSg@xEe@~J@jBTpCAvAQ`CaAbCe@dJLf@|@lAxHjDYhG^pKMzA_DxJKnAsAlFyArDmCrEwF`NoCjKuBzLw@zJSrOx@zc@\\zBv@nBfCnBtBFzCsAfIiJl@G\\_BNDhCdCzCjBbQfPdAp@lD|D|Ar@n@pAzGbGlBfCnNlZ|@r@TlBhEtKd@f@bChA`@v@@r@e@fBsAlAgAlGcDra@_@pK^tCpBfDX?j@gB~@e@`A@vCl@nApEEj@_@h@WU@PEQ"},"max_speed":12.54,"moving_time":4538,"name":"Evening Ride","photo_count":0,"pr_count":24,"private":false,"resource_state":2,"sport_type":"Ride","start_date":"2022-06-07T18:36:17Z","start_date_local":"2022-06-07T20:36:17Z","start_latlng":[51.83534983545542,5.8020315784960985],"timezone":"(GMT+01:00) Europe/Amsterdam","total_elevation_gain":87.2,"total_photo_count":0,"trainer":false,"type":"Ride","upload_id":7745767508,"upload_id_str":"7745767508","utc_offset":7200,"visibility":"everyone","workout_type":10},
            //     {"achievement_count":94,"athlete":{"id":43291548,"resource_state":1},"athlete_count":1,"average_speed":4.741,"comment_count":0,"commute":false,"display_hide_heartrate_option":false,"distance":33434.9,"elapsed_time":9374,"elev_high":96.6,"elev_low":7.2,"end_latlng":[51.83538805693388,5.801981370896101],"external_id":"518c3246-070a-45ec-a647-4ce3092299af-activity.fit","flagged":false,"from_accepted_tag":false,"gear_id":null,"has_heartrate":false,"has_kudoed":false,"heartrate_opt_out":false,"id":7017011556,"kudos_count":0,"location_city":null,"location_country":null,"location_state":null,"manual":false,"map":{"id":"a7017011556","resource_state":2,"summary_polyline":"cbk{Hielb@a@}@f@vA`@e@FmAqAwD{AKuByA_CrEwBsDWqCp@kP|C{^v@cE|AmBlAqFt@}A~DmEzBWrJoKT?|@xBrGyHpGwFNe@MeAtHaHfC_@|GmM|I}Ip^kHzEj@lKpFlDUlCsApL{O`AaATNxHyMv@}CpDuYSwRHqn@HoUV_CWgB@sUgGuj@wA__@v@iOG{]zAu\\q@yNyA}FcAoBeBg@eDn@mBm@s@wBoBiBaFyK?sBt@kDt@_NVmKEuPWi@aACwCnB_A@qHu@oBmAo@qB~AaFE{Cr@qF@oAG[kMbAYbEf@jDaAvB_BEDtDqA`@{@mAwAEgA`DAfDc@VOfA_A~ADfD[xA\\`BOpCkBjCiBd@G^gAm@ZsBsBGRkF_AgEVmDiAiGLkA_@qDdAGz@pEd@h@|@e@f@wDc@aDDiDi@mBPyA]u@?cAo@cARg@v@BrAgAWgAe@Xg@k@D_Ax@cBQ_AZmAKo@lAKtGlB~@aCj@_@h@Or@j@MgBj@g@p@pApCOtAj@v@nAR?JkAl@xAdAl@b@o@ReB~ABh@s@lAOT{Gv@wB@wDh@_BfCaAp[oBfGgA|@dD`BxO?lAc@x@^vDQz@~ApDg@~@wEhAa@r@BhEbAn@jAg@pAp@eFN_BxI~BG`Bq@Zy@pAMzDaCj@Vf@]Bi@gAgI?_CbBgCjAKJw@a@oCDgBtFwBpBgBf@lF`@r@zEsECgHoBuMpDaD^`ArBDPm@tDkAd@wAUMJg@Yi@S{ChBaAo@{Hb@]gDv@aCkRYsFfCoAReAzHcCd@ZA~Aj@tDdHq@ArPUf@}DzAMfAp@zCGt@iAr@w@NvBdc@zAtIiA`CeAZOx@kA`BuAj@YxBhBdJlBcCvBrCz@TEn@EuAV_@`D~FEvAdBxCnAfEx@Kd@`CEbEl@pAJxArA|BSfBNnCPn@n@PIlA^NIvAn@b@O|@~AxNfAnAJpAdAt@Yt@pGxMJz@mPVgGtE{]``@gr@jKs@rSJ|Zm@jL|@t\\bGtg@RzFGdQUdBRtIWtoAqAxRw@dHe@RXLUlAkDvG}EtEoL`PmG`CgBU_KmFaD_@oQtD_J^yBq@sDn@{DrBeBgAMl@VzAfCvERzAiFdMuAhA}AIaChBaE|DBrAUd@aNrMiAz@q@{A]GwIhKw@d@oBL}D~EqBnHeBrBaA`G_CrY}@nT`@tB|BnDtBkE~BxAzANjA`EYfA_@E"},"max_speed":11.202,"moving_time":7053,"name":"Lunch Ride","photo_count":0,"pr_count":31,"private":false,"resource_state":2,"sport_type":"Ride","start_date":"2022-04-21T09:10:39Z","start_date_local":"2022-04-21T11:10:39Z","start_latlng":[51.83538772165775,5.801978772506118],"timezone":"(GMT+01:00) Europe/Amsterdam","total_elevation_gain":291.5,"total_photo_count":0,"trainer":false,"type":"Ride","upload_id":7468453080,"upload_id_str":"7468453080","utc_offset":7200,"visibility":"everyone","workout_type":10},
            // ]
            await axios.get('http://localhost:5000/get/all/activities').then(response => {
                this.activities = response.data.allActivities.data
                this.totalDistance = response.data.totalDistance
                this.rideTypes = response.data.rideTypes
            }).catch(error => {
                console.log(error)
            })
        },

        async searchActivity(id: any) {
            let activities = JSON.parse(JSON.stringify(this.activities))
            for(let activity in activities) {
                if(activities[activity].id == id) {
                    this.activeActivity = activities[activity]
                }
            }
        },

        async getRideMap(activeActivity: any) {
            console.log(activeActivity.map.summary_polyline)
            await axios.get('http://localhost:5000/get/ride/map', 
                {
                    params: { 
                        polyline: activeActivity.map.summary_polyline, 
                        startingLocationLat: activeActivity.start_latlng[0],
                        startingLocationLon: activeActivity.start_latlng[1],
                }
            }).then( response => {
                this.map = response.data
            }).catch(error => {
                console.log(error)
            })
        },

        async getChart(activeActivity: any) {
            await axios.get('http://localhost:5000/get/stream',
            {
                params: {
                    id: activeActivity.id
                }
            }).then(response => {
                this.chart = response.data
            }).catch(error => {
                console.log(error)
            })
        },

        setActiveActivityToEmpty() {
            this.activeActivity = ''
            this.chart = ''
            this.map = ''
        }
    }
})