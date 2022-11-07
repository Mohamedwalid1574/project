const RectionPopUp = () => {
    return (
        <>
            <input style={{display: 'none'}} type="radio" id="reactions-curtir" name="reactions"/>
                <input style={{display: 'none'}} type="radio" id="reactions-amei" name="reactions"/>
                    <input style={{display: 'none'}} type="radio" id="reactions-haha" name="reactions"/>
                        <input style={{display: 'none'}} type="radio" id="reactions-uau" name="reactions"/>
                            <input style={{display: 'none'}} type="radio" id="reactions-triste" name="reactions"/>
                                <input style={{display: 'none'}}type="radio" id="reactions-grr" name="reactions"/>
                                    <div class="facebook-reactions">

                                        {/* <span>CURTIR</span> */}

                                        <div class="reactions">
                                            <ul>
                                                <li class="reactions-curtir" data-title="Curtir"><label for="reactions-curtir"></label></li>
                                                <li class="reactions-amei" data-title="Amei"><label for="reactions-amei"></label></li>
                                                <li class="reactions-haha" data-title="Haha"><label for="reactions-haha"></label></li>
                                                <li class="reactions-uau" data-title="Uau"><label for="reactions-uau"></label></li>
                                                <li class="reactions-triste" data-title="Triste"><label for="reactions-triste"></label></li>
                                                <li class="reactions-grr" data-title="Grr"><label for="reactions-grr"></label></li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                                );
}

                                export default RectionPopUp;