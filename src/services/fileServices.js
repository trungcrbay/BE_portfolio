
const path = require("path");

const apiUploadSingleFile = async (fileObjects) => {
    // let uploadPath = __dirname + '../public/images/uploads' + fileObjects.name;
    let uploadPath = path.resolve(__dirname, "../public/images/uploads");
    console.log("check uploadPath: ", uploadPath)
    let extName = path.extname(fileObjects.name);

    let baseName = path.basename(fileObjects.name, extName);
    let finalName = `${baseName} - ${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;

    try {
        await fileObjects.mv(finalPath) // can take a callback or return a promise =>> purpose: move file to elsewhere
        return {
            status: 'success',
            path: finalName,
            error: null
        }

    } catch (error) {
        console.log("check app error", error)
        return {
            status: 'error',
            path: null,
            error: JSON.stringify(error)
        }
    }
}

const apiUploadMultitleFile = async (fileArrays) => {
    let uploadPath = path.resolve(__dirname, "../public/images/uploads");
    let resultArr = [];
    let countFileSuccess = 0;
    for (let i = 0; i < fileArrays.length; i++) {
        let extName = path.extname(fileArrays[i].name);
        let baseName = path.basename(fileArrays[i].name, extName);
        let finalName = `${baseName} - ${Date.now()}${extName}`;
        let finalPath = `${uploadPath}/${finalName}`;
        console.log("check finalPath: ", finalPath);
        try {
            await fileArrays[i].mv(finalPath) // can take a callback or return a promise =>> purpose: move file to elsewhere
            resultArr.push({
                status: 'success',
                path: finalName,
                error: null
            })
            countFileSuccess++;

        } catch (error) {
            console.log("check app error", error)
            return {
                status: 'error',
                path: null,
                error: JSON.stringify(error)
            }
        }
    }

    return {
        countSuccess: countFileSuccess,
        detail: resultArr,
    };

}


module.exports = {
    apiUploadSingleFile, apiUploadMultitleFile
}