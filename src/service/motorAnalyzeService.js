import {findAllData} from "../domain/motorAnalyseDomain";
import {groupBy} from "../utils/groupBy";

export const executeAnalysis = async (req, res) => {
    const data = await findAllData();
    const groupByData = groupBy('read_data');
    const dataGroup = groupByData(data);
    res.json({body: dataGroup});
}
