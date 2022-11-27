import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme();
const QuickFix = () => {

    const carmateServices = {
        GasketReplacement:['Gear oil replacement', 'grinding noise when in 4wd', 'leaked fluid','output seal replacement','contaminated oil', 'leaking fluid', 'grinding noise on high speeds'],
        EngineDiagnosis:['Need to inspect the car'],
        TireRod:['Rough Steering', 'Irregular Wheel drive'],
        Differentials:['Grinding gears', 'Premature tire wear'],
        BrakePads:['Brake fluid leak', 'Delayed braking effect'],
        RearDrum:['Rear drum leak', 'low braking effect', 'non-functional parking brake'],
        WaterPump:['coolant leaking', 'overheating', 'Temperature gauge anomalies'],
        ThermostatReplacement:['Temperature gauge anomalies', 'Overheating engine', 'Coolant system parts repairs'],
        TransmissionFluid:['Transmission fluid leak', 'Check Engine light', 'Strained Engine running','Vehicle stall while ascending hills'],

    }
    const suspensionServices = {
        ShocksAbsorber:['Stiff suspension', 'Shock absorber damage', 'Shock absorber leaks'],
        Springs:['Damaged coil springs', 'car leans to one side'],
        Struts:['Premature tire wear', 'rough drives'],
        Balljoints:['shaking steering', 'involuntary left and right car steering', 'premature car wear'],
        Hubs:['slow steering', 'Damaged hub bearings', 'Damaged hub seals', 'slow breaking'],
    };
    const engineCheckServices = {
        EngineLight:['Engine check', 'oil filter replacement'],
        AirFilter:['Check engine light', 'Damaged air filter', 'engine failure', 'abnormally high fuel consumption'],
        SparkPlugs:['Misfire', 'abrupt engine stop', 'Engine wont start', 'engine noise'],
        Battery:['Car wont start', 'Battery change', 'Battery not charging', 'warning light'],
        TimingBelt:['abrupt engine stop', 'engine noise'],
    }
    const majorservices = {
        FilterChange:['air flow interruption', 'poor air aeration in the car', 'air and oil filter change'],
        Armbrush:['Armbrush replacement', 'unstable breaking', 'steering wheel vibration', 'armbrush clanking noise'],
        RadiatorCoolant:['HighTemperature', 'coolant change'],
        RadiatorWashing:['correcting the radiator', 'destroyed water pump'],
        AlternatorReplacement:['Battery system warning light', 'high rate of battery discharge', 'dimmed headlights'],
    }

    const typeService = ['QUICK FIXES', 'SUSPENSION SYSTEMS', 'MAJOR SERVICES', 'ENGINE CHECKS'];



    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
 
        <Container maxWidth="lg" sx={{alignItems:'center'}}>
        <h3>Need a service, check below for your personalised service and our team will contact you</h3>
        <div className="contactFormContainer">
        </div>
        <h1>{typeService[0]}</h1>
        {Object.keys(carmateServices).map((key, index)=>{
          return( 
            <div>
            <h4>{key}</h4>
            <Multiselect
            isObject={false}
            onRemove={(e)=>{console.log(e)}}
            onSelect={(e)=>{console.log(e)}}
            options={carmateServices[key]}
           />
           </div>); 
        })}  
        <h1>{typeService[3]}</h1>
        {Object.keys(engineCheckServices).map((key, index)=>{
          return( 
            <div>
            <h4>{key}</h4>
            <Multiselect
            isObject={false}
            onRemove={(e)=>{console.log(e)}}
            onSelect={(e)=>{console.log(e)}}
            options={engineCheckServices[key]}
           />
           </div>); 
        })} 
        <h1>{typeService[1]}</h1>

        {Object.keys(suspensionServices).map((key, index)=>{
          return( 
            <div>
            <h4>{key}</h4>
            <Multiselect
            isObject={false}
            onRemove={(e)=>{console.log(e)}}
            onSelect={(e)=>{console.log(e)}}
            options={suspensionServices[key]}
           />
           </div>); 
        })} 
        <h1>{typeService[2]}</h1>
        {Object.keys(majorservices).map((key, index)=>{
          return( 
            <div>
            <h4>{key}</h4>
            <Multiselect
            isObject={false}
            onRemove={(e)=>{console.log(e)}}
            onSelect={(e)=>{console.log(e)}}
            options={majorservices[key]}
           />
           </div>); 
        })}  
        <div className="formInput1">
        <button className="submitbutton">
                Submit
            </button>
        </div> 
        </Container>
        </ThemeProvider>
    )
}
export default QuickFix;