import commonDBConnection from '../infra/commonDBConnection';

export const findAllData = async () => {
    try {
        const data = await commonDBConnection.select('*').from('motor_data');
        return data;
    } catch (e) {
        console.log('error', e);
    }
}
