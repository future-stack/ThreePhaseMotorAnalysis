import commonDBConnection from '../infra/commonDBConnection';

export const findAllData = async () => {
    try {
        const data = await commonDBConnection.select(['electric_current_a','electric_current_b','electric_current_c','read_data']).from('motor_data');
        return data;
    } catch (e) {
        console.log('error', e);
    }
}
