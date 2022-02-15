
const arrayNoiTam = [
    {
        chiso: 1,
        title: "Bạn luôn mong muốn mình là người đi tiên phong, làm chủ mọi cuộc chơi, từ sự nghiệp cho đến cuộc sống. Bạn thích nhìn vào một bức tranh lớn, toàn diện hơn là chi tiết. Đối với một vấn đề, bạn luôn muốn tìm cách suy nghĩ nó theo hướng độc đáo, khác biệt, giải pháp mang tính sáng tạo của riêng bạn. Bên trong bạn thường thôi thúc ra quyết định nhanh chóng, quyết liệt và tiến đến việc được giao quyền kiểm soát, quyền dẫn dắt, lãnh đạo. Làm việc độc lập thực sự thoải mái với bạn."
    }, {
        chiso: 2,
        title: "Bạn luôn mong muốn thể hiện niềm vui sống, sự lạc quan, tích cực của mình cho những người xung quanh. Nếu bạn sở hữu một tài năng nghệ thuật (thường liên quan đến ngôn ngữ), bạn có xu hướng mang tâm hồn mình gửi vào đó, rồi bày tỏ nó ra với thế giới bên ngoài. Trong một tập thể hay tổ chức, bạn được thôi thúc khuấy động không khí trầm lắng trở nên náo nhiệt và vui vẻ hơn. Bạn thích cười và cảm thấy vui khi nhìn thấy người khác cười với bạn."
    }, {
        chiso: 3,
        title: "Bạn luôn mong muốn xây dựng một nền tảng chắc chắn cho cuộc sống. Nếu có bất cứ thứ gì xảy đến làm đảo lộn những nguyên tắc, trật tự, thói quen mà bạn đang có thì thật không dễ chịu chút nào. Bạn có xu hướng tiến đến những môi trường hay những kế hoạch ổn định, an toàn, có quy trình rõ ràng. Nếu ai đó dành tặng cho bạn một lời khen khi bạn làm đúng, bạn sẽ thật sự rất vui và trân trọng điều đó."
    }, {
        chiso: 4,
        title: "Bạn luôn mong muốn hướng tới sự tự do với những trải nghiệm đa dạng, mới mẻ. Dường như công việc có tính chất lặp đi lặp lại không làm bạn cảm thấy thoải mái. Bên trong luôn thôi thúc bạn tiến đến những gì mang tính chất sáng tạo, cần khả năng ứng biến cao. Bạn thường rất thích với trò chuyện những con người thú vị và cấp tiến, sẵn sàng đón nhận những tư duy khác lạ. Vì sở hữu một tâm hồn cởi mở phóng khoáng nên bạn dường như có thể là người bạn đồng hành vui vẻ của bất cứ ai, trong bất kì môi trường nào."
    }, {
        chiso: 5,
        title: "Bạn luôn mong muốn được dành tình yêu, sự chăm sóc của mình cho gia đình và những người thân thương. Khi sự tận tâm của bạn được công nhận và đáp trả bằng những lời cảm ơn, cảm kích, bạn thật sự rất vui và sẵn sàng tiếp tục tận tâm phục vụ và cho đi nhiều hơn nữa. Bạn thích những thứ nhẹ nhàng và tinh tế, ngay cả về con người cũng vậy. Bản thân bạn cũng hướng đến sự duy mĩ và những điều đẹp đẽ, do đó thường gu thời trang của bạn cũng được đánh giá cao."
    }, {
        chiso: 6,
        title: "Bạn luôn mong muốn thấu hiểu được chiều sâu của vấn đề, không thích cách tiếp cận hời hợt qua loa. Bên trong bạn có sự thôi thúc tìm đến những không gian tĩnh lặng, một mình chiêm nghiệm về cuộc sống, về những gì bạn còn đang khúc mắc. Bạn có xu hướng cẩn trọng trong các mối quan hệ, có vẻ bạn khó gần nhưng nếu ai quen thân và hiểu được, sẽ biết bạn tinh tế và sâu sắc như thế nào. Bạn thích phân tích bản chất của các sự vật, sự kiện và xâu chuỗi chúng để tìm ra những sự thật và chân lý."
    }, {
        chiso: 7,
        title: "Bạn luôn mong muốn tìm ra được cách thức vận hành đồng tiền hiệu quả, ít nhất là trong khoản tài chính cá nhân. Việc hiểu được các quy luật, đặc biệt trong thế giới quyền lực và kinh doanh dường như luôn là điều kích thích bạn học hỏi và phát triển. Bên trong bạn thường thôi thúc bạn phải hành động, nỗ lực nhiều hơn nữa để đạt được kết quả tuyệt vời như mình đã đặt ra. Bạn có xu hướng tìm đến những cơ hội một cách chủ động và nắm bắt chúng với một tâm thế quyết liệt."
    }, {
        chiso: 8,
        title: "Bạn luôn mong muốn được cống hiến cho xã hội, cho nhân loại. Bên trong bạn thường thôi thúc những hành động hướng đến chủ nghĩa nhân đạo, thiện nguyện, giúp đỡ cho người khác. Thậm chí, bạn sẵn sàng cho đi mà không mưu cầu nhận lại. Bạn thường có xu hướng quan tâm đến những gì lớn lao, đôi khi không thực tế cho lắm. Bạn không ngại kết nối với nhiều tầng lớp xã hội, nhiều loại người khác nhau để hiểu và cảm thông với họ. Về gu thẩm mĩ, bạn cũng dành sự quan tâm hơn cho những gì thanh tao, tinh tế."
    }, {
        chiso: 9,
        title: "Bạn luôn mong muốn được cống hiến cho xã hội, cho nhân loại. Bên trong bạn thường thôi thúc những hành động hướng đến chủ nghĩa nhân đạo, thiện nguyện, giúp đỡ cho người khác. Thậm chí, bạn sẵn sàng cho đi mà không mưu cầu nhận lại. Bạn thường có xu hướng quan tâm đến những gì lớn lao, đôi khi không thực tế cho lắm. Bạn không ngại kết nối với nhiều tầng lớp xã hội, nhiều loại người khác nhau để hiểu và cảm thông với họ. Về gu thẩm mĩ, bạn cũng dành sự quan tâm hơn cho những gì thanh tao, tinh tế. "
    }, {
        chiso: 11,
        title: "Chỉ số Nội tâm 11 cho thấy, bạn thích học hỏi, trao đổi, trò chuyện hay giúp đỡ người khác về những vấn đề liên quan đến tinh thần hoặc tâm linh. \n Bạn muốn hướng những suy nghĩ, hành động của mình đến sự thiện nguyện, các giá trị nhân đạo. \n Bạn thường đặt để sự quan tâm của mình vào những giấc mơ lớn vị nhân sinh, góp phần cải thiện và nâng cao đời sống tinh thần của càng nhiều người càng tốt, không muốn sống chỉ vị kỉ cho riêng bản thân mình."
    }, {
        chiso: 22,
        title: "Chỉ số Nội tâm 22 cho thấy, bạn thích sử dụng những khả năng của mình để thực hiện những cam kết về xã hội, về nhân đạo. \nBạn muốn biến trực giác nhạy bén và sức mạnh nội tại mạnh mẽ từ bên trong mà bạn cảm nhận được thành những hành động cụ thể như một nhà kiến tạo, nhà ngoại giao…\nCó khả năng, từ những tình huống hay những thôi thúc nào đó trong hành trình cuộc đời, bạn khát khao có sự đóng góp đáng kể trong việc xây dựng một thế giới tươi đẹp hơn.\nBây giờ thì bạn đã hiểu tại sao mình cứ có những cảm giác không đúng với bản thân mình rồi chứ? Hoặc giả như bạn chưa trải qua những đấu tranh nội tâm thì cũng chúc mừng bạn, bạn đã có thêm thời gian để quay vào bên trong để học cách thấu hiểu và đáp ứng những khát khao sâu thẳm của mình. Chúc bạn dung hòa được hai mặt trong ngoài, từ đó mà sống thật hạnh phúc và an nhiên. "
    },
]

const arrayNoiCam = [
    {
        chiso: 1,
        title: "Bạn có tính chiến đấu rất mạnh mẽ, chỉ cần còn đủ sức lực, bạn luôn hướng về phía trước. Bạn có cái tôi lớn, cá tính, độc lập. Bạn luôn muốn chiến thắng và lao vào các cuộc đua, cuộc đấu. Bạn có tư chất thủ lĩnh cao.\nBạn cũng có thể là người độc đoán, ích kỷ, đàn áp, máu ǎn thua."
    }, {
        chiso: 2,
        title: "Bạn có thiên hướng gia đình. Bạn luôn mong mỏi có một gia đình đầm ấm và hạnh phúc. Bạn cũng mong muốn có được môi trường sống, làm việc hòa hợp với bạn bè, đồng nghiệp. Bạn mong muốn cho mọi mối quan hệ được tình cảm và tốt đẹp.\nNếu một mối quan hệ đổ vỡ hoặc rạn nứt, bạn sẽ cảm thấy bất an. Trẻ nhỏ có số nội cảm 2 thường dễ bị tổn thương và hay khóc.\nBạn cũng là người giàu tình cảm và nhiều linh tính. Bạn có trực giác rất tốt. Cảm giác của bạn về con người, sự việc thường là chính xác. Biểu đồ tên trong thần số học rất đẹp nếu bạn có số 2 và đầy đủ các số khác       "
    }, {
        chiso: 3,
        title: "Sáng tạo là đặc trưng của bạn. Bạn đầy ắp sự liên tưởng, giải pháp mang tính sáng tạo. Bạn cũng là người vui vẻ, hài hước, thân thiện. Bạn giỏi giao tiếp, kết nối và thường đem đến niềm vui, cảm hứng và trí sáng tạo.\nBạn như một đứa trẻ, luôn tỏa sáng và được mọi người yêu mến. Bạn luôn cần sự tương tác với mọi người."
    }, {
        chiso: 4,
        title: "Bạn là người tìm kiếm sự thật, lẽ phải, sự rõ ràng, chân lý. Bạn không chỉ tìm kiếm mà còn có thể đấu tranh cho điều đó. Bạn trung thực, chân thành và hành động theo lẽ phải. Nhưng bạn cũng có thể mắc phải xu hướng bảo thủ, cố chấp và hay sa đà vào tranh luận, cãi vã."
    }, {
        chiso: 5,
        title: "Bạn là người đầy đam mê và tận hưởng cuộc sống. Bạn thường có mặt trong các lễ hội, cuộc chơi, thích tụ tập bạn bè, thích du lịch, thích khám phá và trải nghiệm. Bạn giàu năng lượng, thích phiêu lưu. Nhưng bạn nên thận trọng với những thú vui tiêu cực như tình dục, rượu chè, cờ bạc, v.v.. Bạn cũng nên thận trọng trong chi tiêu vì bạn dễ tiêu pha và ăn chơi quá đà."
    }, {
        chiso: 6,
        title: "Số 6 mang năng lượng yêu thương của người mẹ. Bạn có xu hướng quan tâm, chăm sóc và hay giúp đỡ người khác. Bạn quan tâm nhưng lại hay lo lắng, không yên tâm khi nhìn người khác làm việc, thành ra bạn hay bao đồng, làm thay họ. Nếu cứ để điều đó tiếp diễn, bạn sẽ rất mệt. Bạn cần chia sẻ công việc và nhiệm vụ cho người khác."
    }, {
        chiso: 7,
        title: "Bạn huyền bí, khó hiểu. Bạn không muốn mọi người biết rõ việc của mình. Những suy nghĩ của bạn có thể vượt xa người khác, đến mức có thể khiến họ không hiểu gì nếu bạn nói ra. Với những điều như thế, bạn thường im lặng, và chỉ chia sẻ với những ai cùng tư tưởng hoặc với người có thể hiểu và cầu thị.\nBạn có xu hướng triết lý, tư tưởng và có tinh thần mạnh mẽ. Khi bạn chia sẻ kiến thức, trí tuệ, sức thuyết phục của bạn rất lớn. Sức mạnh thuyết phục đến từ sự logic, kiến thức và tinh thần mạnh mẽ của bạn.\nBạn hiểu biết, tình cảm và cũng khá dịu dàng, ngọt ngào. Nhưng cũng có lúc bạn đanh đá với những ngôn từ chua cay."
    }, {
        chiso: 8,
        title: "Bạn giỏi kinh doanh và thường dành nhiều thời gian cho công việc. Chỉ cần lắng nghe lời khuyên, thấu hiểu nhu cầu nội tâm của người khác, bạn sẽ thành công."
    }, {
        chiso: 9,
        title: "Bạn là người có tâm hướng tới mọi người. Bạn độ lượng, quan tâm và được yêu mến. Mọi người có xu hướng tin tưởng bạn một cách tự nhiên và bạn cũng có tố chất lãnh đạo bẩm sinh.\nBạn có tâm hồn khoáng đạt và có xu hướng quốc tế. Bạn có thể đi nước ngoài, làm việc có yếu tố nước ngoài."
    }
]

const arrayDuongDoi = [
    {
        chiso: 1,
        title: "Tượng trưng cho thủ lĩnh, sự lãnh đạo, chỉ huy. Bạn sinh ra để trở thành người lãnh đạo, làm lớn. Bạn cần phấn đấu làm mọi thứ thật hoàn hảo và phải khắc phục được tiếng thì thầm lặp lại trong đầu rằng mọi việc chưa đủ tốt."
    }, {
        chiso: 2,
        title: "Biểu tượng của dòng nước, là đại diện cho sự hòa bình, hòa hợp, sự kết nối và hóa giải. Bạn là người thú vị, thông minh, giàu tình cảm, có năng khiếu văn học và có tầm nhìn xa, thận trọng. Bạn cũng rất quan tâm, chăm lo đến gia đình."
    }, {
        chiso: 3,
        title: "Bạn có khả năng truyền đạt tuyệt vời và thường được biết đến trong vai trò người diễn thuyết, hoặc làm những công việc đòi hỏi sự sáng tạo, nghệ thuật như diễn viên, nhà văn, nhà thiết kế thời trang, nhà tạo mẫu tóc.        "
    }, {
        chiso: 4,
        title: "Bạn là người có xu hướng an toàn, xây dựng nền tảng, muốn chia sẻ kiến thức, vì vậy bạn thường sẽ là một chuyên gia hay những giáo viên xuất sắc. Bạn sở hữu khả năng tư duy logic nhạy bén và sống thực tế."
    }, {
        chiso: 5,
        title: "Bạn say mê cuộc sống, đam mê “xê dịch” và thích khám phá. Trong cuộc sống, bạn thường là người tổ chức nên các bữa tiệc, hoặc đưa ra những phương hướng giải quyết mới mẻ và hiệu quả.\nThần Số Học Số 5 yêu tự do, vui vẻ và phiêu lưu. Họ thích sự đa dạng; họ có thể thay đổi lề thói làm việc hàng ngày vì họ rất mau chán. Loại rung động này cần sự kích thích bền vững. Họ sống trong đam mê. “Vui quên sầu” là trò chơi của số “5”."
    }, {
        chiso: 6,
        title: "Bạn là người giàu lòng yêu thương, luôn muốn tạo nên một mái ấm an lành cho gia đình. Bạn sẽ trở thành những bậc cha mẹ tuyệt vời trong tương lai.\nthần Số Học Số 6 là những phụ huynh bẩm sinh, người luôn quan tâm đến người khác dưới cái nhìn của bậc làm cha làm mẹ. Số “6” quan niệm rằng: Tình yêu và hôn nhân là không thể tách rời."
    }, {
        chiso: 7,
        title: "Tượng trưng cho đức tin và niềm tin vào ý nghĩa cuộc sống. Bạn thích sự yên tĩnh và truyền tải cảm xúc, thông điệp của mình với thế giới thông qua ngòi bùi hoặc trí tuệ của mình."
    }, {
        chiso: 8,
        title: "Bạn quan tâm nhiều tới sự ổn định tài chính và thích làm những việc lớn. Tuổi thơ bạn đã từng trải qua nhiều gian khó và chúng có thể gây tổn thương cả thể chất lẫn tinh thần của bạn. Hãy giữ cho mình sự hài hước và tập trung vào mục tiêu, thành công sẽ sớm tìm đến bạn.\nThần Số Học Số 8 xuất sắc với khả năng điều hành, và cũng là con số của những chính khách. Nó là con số quyền lực, điều này cũng có nghĩa là, khi số 8 muốn kiểm soát, họ sẽ làm mọi thứ với hy vọng tạo ra sự khác biệt tích cực đến toàn thế giới."
    }, {
        chiso: 9,
        title: "là số tiến hóa cao nhất trong Thần số học, và được coi như là một trong những rung động mạnh mẽ nhất, bởi vì nó chứa đựng những tinh túy của tất cả các con số khác.\nKhi số “9” có được nền tảng tinh thần mạnh mẽ, họ trở thành nguồn sáng của cả thế giới. Thật vậy, số “9” là người có lòng vị tha.\nĐây cũng là những rung động đơn có sự quyết tâm cao nhất. Số 9 có ý chí mạnh mẽ để theo đuổi đến cùng, bằng tham vọng và nghị lực phi thường, những gì mình tin tưởng."
    }, {
        chiso: 11,
        title: "là người được mệnh danh là người truyền cảm hứng. Số 11 là những người có số chủ rung động cao hơn của số 2, nên nó bao gồm những gì đại diện bởi người số 2, nhưng được bổ sung thêm những đặc điểm của người số 11. Một trong số đó là khả năng truyền động lực và cảm hứng cho người khác."
    }
]

const arrayThaiDo = [
    {
        chiso: 1,
        title: "Bạn không thích nhờ người khác giúp đỡ.\nBạn tự chủ hoàn toàn.\nBạn thường có vấn đề về lòng tự trọng vì nghĩ rằng mình không đủ giỏi.\nVì vậy bạn cần được khen ngợi, nếu không được tin tưởng bạn sẽ nổi loạn."
    }, {
        chiso: 2,
        title: "Bạn nhẹ dàng, có xu hướng trở thành người quan sát." +
            "\nBạn lãng mạn và tình yêu quan trọng với bạn." +
            "\nBạn bị lôi cuốn với những năng lực huyền bí." +
            "\nBạn có thể chạm đến trực giác và khía cạnh siêu hình." +
            "\nBạn có lòng trắc ẩn và thích chuyện của người khác."
    }, {
        chiso: 3,
        title: "Bạn hay pha trò, có khiếu hài hước và uy tín.\nBạn có thể tác động lên người khác bằng chính năng lượng của mình.\nKhi bạn vui bạn sẽ trò chuyện với nụ cười rạng rỡ, ánh mắt long lanh.\nKhi bạn không vui thì ai bên bạn cũng thấy không vui."
    }, {
        chiso: 4,
        title: "Bạn là người giữ sổ.\nNhiều lúc bạn trở nên trầm mặc và khó ai hiểu bạn.\nBạn hiểu rất rõ những gì đang diễn ra.\nBạn hòa mình cùng thiên nhiên và làm việc liên quan đến sự xây dựng.\nBạn dạy dỗ mọi người và là chuyên gia trong lĩnh vực bạn làm.\nBạn phủ quyết để thấy được mọi mặt của vấn đề.\nVà nếu bạn thấy ai đang thiếu trung thực bạn sẽ vạch trần họ."
    }, {
        chiso: 5,
        title: "Bạn ham vui và ngộ nghĩnh.\nBạn cần đi lại và khám phá thế giới.\nNếu sống nơi buồn tẻ bạn sẽ tự đọa đày mình.\nVì thế bạn cần chủ động bước ra và tạo niềm vui cho chính mình.\nMọi thứ cần sự mạo hiểm và sôi nổi."
    }, {
        chiso: 6,
        title: "Bạn là người nuôi dưỡng, thích săn sóc người khác.\nBạn thấy mình hữu ích nhất khi mọi thứ đang mất kiểm soát và bạn đang sửa chữa chúng.\nCòn khi mọi thứ yên ổn bạn lại thấy mình thừa thãi.\nBạn có sự lôi cuốn mạnh mẽ làm người khác có cảm giác như thiêu thân lao vào ánh lửa của bạn vậy."
    }, {
        chiso: 7,
        title: "Bạn chứa chất nỗi niềm và sống nội tâm.\nBạn phải liên tục theo đuổi việc tìm kiếm câu trả lời cho những câu hỏi trong cuộc đời bạn.\nBạn chỉ tiết lộ bản thân một cách úp mở và có thể im lặng làm người khác hiểu nhầm.\nĐằng sau sự thể hiện đó là bởi vì bạn có năng lực quan sát mạnh mẽ và không muốn bỏ lỡ điều gì. "
    }, {
        chiso: 8,
        title: "Bạn sẵn sàng bộc bạch tâm sự mà chẳng giấu diếm.Bạn trăn trở nhiều đến việc cải thiện và nâng tầm chất lượng cuộc sống cũng như đảm bảo sự an toàn về tài chính.\Khi bạn có gia đình bạn là người cấp dưỡng tốt, mặt tiêu cực là bạn kiểm soát tiền bạc.\nBạn cần xem mỗi ngày là một cơ hội và buộc phải rũ bỏ quá khứ để không bị những suy nghĩ tiêu cực từ quá khứ cản trở con đường hạnh phúc của bạn."
    }, {
        chiso: 9,
        title: "ạn là thủ lĩnh. Bạn không chỉ làm việc của mình mà còn làm cả việc của người khác.\nBất cứ nơi nào bạn đến, người khác đều trông chờ bạn đảm đương nhiệm vụ.\nQuy tắc sống cơ bản của bạn là “Hãy chỉ tôi rồi để tôi tự làm”.\nNếu có vết thương lòng từ bé bạ cần để gió cuốn đi nếu không bạn sẽ muộn phiền.\nBạn nhiệt tâm giúp người khác nhưng phải học cách bảo vệ sức khỏe của mình tránh bị kiệt sức."
    }
]

const arrayDinhMenh = [
    {
        chiso: 1,
        title: "Sứ mệnh của bạn trong cuộc đời này là trau dồi bản thân và trở thành một người lãnh đạo. Mục đích cuộc đời bạn là kiên cường, độc lập, tiên phong, phát kiến và đưa vai gánh vác mọi việc – tất cả là để phát triển ý thức về bản ngã, ý chí và sự quyết tâm của bạn.\nHọc cách tự lập, suy nghĩ cho chính mình và khiến mình trở nên cá tính cũng như những điều mới, những tư tưởng mới và các hoạt động sáng tạo mang đến những cơ hội lớn để bạn vươn tới sứ mệnh của mình.\nBạn sinh ra là để lãnh đạo. Hãy là một người lãnh đạo và dạy cách trở thành một người lãnh đạo."
    }, {
        chiso: 2,
        title: "Sứ mệnh của bạn trong cuộc đời này là tạo ra sự hài hòa. Mục tiêu của bạn là tìm kiếm sự hợp tác, cân bằng và là một đối tác kiên nhẫn – tất cả là để phát triển ý thức của bạn về mối quan hệ.\nBạn cần học về lòng trắc ẩn và tiếp nhận mọi thứ bằng cảm xúc. Khả năng thích nghi và tạo sức thuyết phục sẽ đưa bạn đến gần sứ mệnh của mình hơn. Bạn sinh ra là để xây dựng hòa bình. Hãy tiến lên và chia sẻ về nó."
    }, {
        chiso: 3,
        title: "Mục đích của bạn trong cuộc đời này là tiếp thêm sinh lực và sức mạnh. Mục đích của bạn là khuyến khích người khác thông qua những hi vọng và niềm tin của bạn, sử dụng sự sáng tạo đầy cảm hứng của bạn để giúp người khác cùng trải nghiệm niềm vui.\nHọc cách thể hiện cảm xúc của bạn thông qua tài năng sử dụng từ ngữ và sự sôi nổi, nhiệt huyết và thông minh sẽ giúp bạn tiến tới sứ mệnh của mình.\nBạn sinh ra là để thể hiện bản thân, hãy trò chuyện, luôn tích cực và khuyến khích mọi người."
    }, {
        chiso: 4,
        title: "Sứ mệnh của bạn trong cuộc đời này là xây dựng một cái gì đó có giá trị lâu dài. Mục tiêu của bạn là trở nên thực tế, làm việc chăm chỉ đồng thời giữ mọi thứ trật tự, ngăn nắp để đảm bảo nhu cầu được an toàn.\nHọc cách thể hiện những giá trị truyền thống và sự trung thành, kiên định sẽ giúp bạn hoàn thành sứ mệnh của mình. Bạn sinh ra là để quản lý và thiết lập trật tự. Hãy tạo dựng nền tảng và phát triển mọi thứ từ đó."
    }, {
        chiso: 5,
        title: "Sứ mệnh của bạn trong cuộc đời này là điều chỉnh, phát triển và tiến bộ. Mục đích của bạn là nắm lấy các cơ hội và quyền tự chủ, và theo đuổi trí tò mò vô tận của mình, đồng thời vận dụng sự tháo vát cũng như sự cuốn hút để luôn tiến về phía trước.\nHọc cách thể hiện sự khéo léo và trở thành một linh hồn tự do sẽ giúp bạn tiến tới sứ mệnh của mình.\nBạn được sinh ra là để được giải phóng và tự do. Hãy tiến về phía trước và thích nghi uyển chuyển với mọi sự thay đổi."
    }, {
        chiso: 6,
        title: "Sứ mệnh của bạn trong cuộc đời này là phục vụ. Mục tiêu của bạn là chăm sóc gia đình và những người thương yêu đồng thời sử dụng sự ngưỡng mộ và yêu mến của bạn đối với mọi người và những điều tinh tế để thiết lập sự gần gũi, thân thiết xung quanh bạn.\nHọc cách để bày tỏ lòng vị tha cũng như mang lại cho người khác sự thoải mái, dễ chịu sẽ giúp bạn tiến tới mục tiêu của mình.\nBạn sinh ra là để nuôi dưỡng và làm đẹp. Hãy yêu thương bằng sự cân bằng và bình ổn."
    }, {
        chiso: 7,
        title: "Sứ mệnh của bạn trong cuộc đời này là tìm tòi và nghiên cứu. Mục đích của bạn là đào sâu vấn đề và chiêm nghiệm tất cả những gì xảy ra trong cuộc đời này. Sử dụng khả năng phân tích và sự tỉ mỉ của mình để tìm kiếm trí huệ.\nHọc cách thể hiện sự kỹ lưỡng sắc sảo của mình cũng như sự chu đáo và sáng suốt sẽ đưa bạn tới gần mục tiêu của mình. Bạn sinh ra là để khai mở thế giới. Hãy tập trung và rèn giũa sự thông thái của bạn."
    }, {
        chiso: 8,
        title: "Sứ mệnh của bạn trong cuộc đời này là có được sự tự kiểm soát bản thân. Mục đích của bạn là tự hoàn thiện, sử dụng khả năng của bạn trong kinh doanh và tổ chức.\nHọc cách để thể hiện bản chất đích thực, khám phá sức mạnh của chính mình và tầm nhìn khoáng đạt sẽ đưa bạn tiến gần đến sứ mệnh của mình.\nBạn sinh ra là để có được sự thành công và giàu có vật chất. Hãy nhận thức được điều này và trở thành một nhà lãnh đạo kiệt xuất."
    }, {
        chiso: 9,
        title: "Sứ mệnh của cuộc đời bạn là vươn tới sự hoàn mỹ và yêu thương vô điều kiện. Mục tiêu của bạn là vươn tới những linh hồn tiến hóa cao hơn trong vũ trụ này bằng sự nhân đạo, lòng thương cảm và nghệ thuật chữa lành của mình.\nHọc cách chuyển hóa, chữa lành, sẵn sàng tiếp thu, lĩnh hội những ý tưởng mới và một tấm lòng khoan dung độ lượng sẽ đưa bạn lại gần sứ mệnh của mình.\nBạn sinh ra là để vươn tới những chân trời mới. Hãy vươn tay ra để giúp đỡ mọi người.   "
    }
]

const arrayNgaySinh = [
    {
        chiso: 1,
        title: "Luôn cố gắng hết sức khi được làm việc một mình.\nCần rất nhiều tự do để có thể phát triển một cách trọn vẹn nhất, cũng như để biểu đạt hết bản chất độc đáo của họ. Con số chủ đạo sẽ là kim chỉ nam cho thấy bản chất này hướng vào điều gì.\nMặt khác, đôi khi họ có khả năng bị cuốn ra khỏi con đường của Con số chủ đạo vì mong muốn được làm mọi thứ theo ý mình.\nDo thích tự nỗ lực và có xu hướng tập trung vào cá nhân, những người này có vẻ tách rời tập thể trong một số thời điểm nào đó. Điều này càng trở nên dễ nhận ra ở những đứa trẻ được sinh ra vào ngày đầu tiên của tháng. Nhưng các bậc cha mẹ không cần quá lo lắng, vì điều này không có ảnh hưởng xấu, bọn trẻ chỉ đơn giản là tận hưởng sự riêng tư của chúng mà thôi."
    }, {
        chiso: 2,
        title: "Được tăng cường độ nhạy của trực giác, nhờ vậy sẽ có được lợi thế lớn trong việc đưa ra các quyết định.\nRất thích được làm việc, hợp tác với những người vững vàng, vui vẻ, có sự bình yên trong tâm hồn.\nRất thích những hình thức giải trí nhẹ nhàng, đặc biệt là những thể loại hài hước; thích làm khán giả hơn là người biểu diễn.\nLà người đáng tin cậy, hữu dụng, nhiệt tình giúp đỡ người khác. Nhìn chung, họ là những người sống nhẹ nhàng, chuộng những gì tự nhiên, không “tâm kế” thâm sâu."
    }, {
        chiso: 3,
        title: "Ngược lại với người có Con số ngày sinh 2, những người có Con số ngày sinh 3 thường thích chủ động đem lại sự giải trí vui vẻ cho người khác, dù là trong gia đình, ở chỗ làm hay trên sân khấu.\nĐa số đều thích làm việc theo dự án, theo chế độ làm việc bán thời gian, vì họ thường có thêm nhiều thú vui hay chí hướng lớn cần theo đuổi (chí hướng lớn hay thú vui đó là gì thì còn tùy vào Con số chủ đạo).\nRất yêu thích sự hài hước, đặc biệt là hài châm biếm.\nLà những người hướng ngoại rất rõ ràng, thông minh, năng động, lúc nào cũng có sẵn câu trả lời cho các vấn đề có thể được hỏi. Tuy nhiên, những người này cần lưu ý rằng bản thân có thể có xu hướng chỉ trích những người có vẻ ù lì hơn mình, thay vì cố gắng hiểu rằng mỗi cá nhân có những xu hướng khác nhau.\nHọ cần nhớ rõ điểm này để kiềm chế thói hay chê bai, thứ dễ gây ra tranh cãi hoặc làm tổn thương cả hai bên. Thay vào đó, hãy tận dụng óc hài hước nhẹ nhàng để “chỉ điểm” cho người khác biết những gì cần điều chỉnh, nếu bạn thật sự nghĩ người ta cần sự giúp đỡ này."
    }, {
        chiso: 4,
        title: "Có tính thực tế và năng lực để diễn đạt bản thân qua sự khéo léo của tay chân, như hoạt động nhảy múa chẳng hạn.\nNếu họ có Con số chủ đạo là số lẻ, thì Con số ngày sinh 4 sẽ giúp họ tạo ra sự cân bằng khi họ chịu tiếp nhận thêm những khía cạnh nghệ thuật hay mang tính triết lý vào cuộc sống.\nNếu có Con số chủ đạo là số chẵn, họ nên lưu ý để tránh bị thu hút quá mức bởi vật chất, và hãy biết rằng chỉ cần phát huy được tính kiên nhẫn khi thực hiện, tổ chức bất cứ việc gì, họ sẽ đạt được kết quả tốt nhất, bởi vì sự kiên nhẫn gần như đã trở thành một phần bản chất của những người có Con số ngày sinh là số 4."
    }, {
        chiso: 5,
        title: "Là những người giỏi quan tâm, chăm sóc người khác, giàu tình cảm, giàu lòng trắc ẩn và rất cần được tự do biểu đạt những cảm xúc này ra ngoài.\nLà những người nhạy cảm, nhưng sở hữu được sự cân bằng để có thể đạt được thành công và hạnh phúc, miễn là họ đừng sợ bị hiểu lầm. Chính nỗi sợ bị hiểu lầm này có thể dẫn đến sự nhút nhát, ngại ngần, làm cản trở khả năng tự biểu đạt của họ, gây ra xu hướng tự thu mình vào trong để đè nén những xúc cảm tự nhiên.\nVì vậy, những người này cần tham gia vào càng nhiều hoạt động hay các bài tập ngoài trời càng tốt và cần chọn những người bạn có tính tình vui vẻ, hoạt bát mà chơi (để thêm cho mình năng lượng tích cực), để có thể tự do cười đùa và tận hưởng những niềm vui của cuộc sống."
    }, {
        chiso: 6,
        title: "Tuy con số 6 mang ý nghĩa của sự sáng tạo, nhưng người có Con số ngày sinh là 6 lại thường bị giới hạn trong khuôn khổ gia đình. Điều này đặc biệt đúng với phái nữ, mặc dù nam giới có Con số ngày sinh 6 cũng thích ở nhà hơn đi ra ngoài, thích làm những việc nho nhỏ có liên quan đến óc sáng tạo hơn là đi la cà bên ngoài cùng bạn bè.\nMặt tích cực của Con số ngày sinh 6 là tình yêu thương và chuộng cái đẹp. Người sinh vào những ngày này thường có khả năng làm bừng sáng cả căn nhà hoặc nơi làm việc của họ.\nTuy nhiên, nếu sống thiếu tích cực, những người này thường dễ lo lắng, có khuynh hướng “chuyện bé xé ra to” đối với các vấn đề trong nội bộ gia đình, và thường sợ hãi hay lo lắng về các vấn đề trong đời sống thường ngày, cũng như không bao giờ ngừng phàn nàn, than thở. Cho nên họ luôn cần tự nhắc nhở bản thân giữ năng lượng tích cực, để mặt tích cực luôn tỏa sáng. Khi đó họ sẽ không mắc vào các vấn đề tiêu cực như trên.\nĐối với những người không tự thoát khỏi những tư tưởng hay lối sống tiêu cực, hãy thử “tìm quên” những năng lượng tiêu cực này bằng cách tự tìm cho mình những thú vui, sở thích sáng tạo phù hợp, vì hoạt động này sẽ làm con số 6 phát triển mạnh. Một số hoạt động mà những người này có thể cân nhắc: vẽ, làm đồ gốm, thêu thùa, may vá, đan móc, học chơi nhạc cụ…"
    }, {
        chiso: 7,
        title: "Thấu hiểu sâu sắc những bài học cuộc sống thông qua việc tự trải nghiệm, mà trong đó, phần lớn là những bài học về tổn thất, hy sinh. Các tổn thất chủ yếu ảnh hưởng tới túi tiền hơn là sức khỏe hay tình yêu, mặc dù nếu sau bài học tổn thất tiền bạc này mà người có Con số ngày sinh là 7 vẫn không tự rút ra bài học thì sẽ dẫn tới tổn thất ở hai lĩnh vực còn lại.\nKhi trưởng thành hơn về mặt trí tuệ, những người này sẽ cảm thấy thôi thúc muốn chia sẻ những trải nghiệm cuộc sống của mình thông qua việc hướng dẫn người khác theo những cách thiết thực nhất. Nếu làm được điều này, bề dày kinh nghiệm của người có Con số ngày sinh 7 sẽ làm giàu thêm cho chính tâm hồn của họ."
    }, {
        chiso: 8,
        title: "Không thích làm việc theo nhóm, cũng không thích thuộc về nhóm nào. Con người thường làm việc theo nhóm để họ có thể được tổ chức, phân công, định hướng. Nhưng điều này đi ngược với sự phát triển cá nhân, vốn là mục đích chính của những người có Con số ngày sinh là 8.\nKhi trưởng thành và phát triển ý thức cá nhân, họ sẽ nhận ra một nhu cầu ngày càng tăng, đó là nhu cầu được diễn đạt độc lập cảm xúc, cảm giác và cả trực giác của mình. Sự độc lập cần thiết này là nền tảng cho mọi biểu đạt khác của họ.\nTuy nhiên, những người này hay nhầm sự độc lập này với độc lập về tài chính và một mực hướng tới mục tiêu này. Thay vào đó, họ cần hiểu rằng độc lập tài chính chỉ là một trong những biểu hiện cho sự độc lập của bản thân, vốn bao gồm nhiều giá trị lớn hơn nữa. Nếu họ không hiểu đúng điều này, không có sự thấu hiểu cuộc sống một cách vững vàng thì những thành công tài chính của họ thường rất ngắn ngủi."
    }, {
        chiso: 9,
        title: "Là những người đầy trách nhiệm với bản thân và với người khác, được thúc đẩy bởi lý tưởng và ước mơ.\nĐôi khi họ trở nên nghiêm túc thái quá, nên cần tìm bạn bè là người vui vẻ, thoải mái, tích cực để được “hưởng” tinh thần vui vẻ này. Những người này cũng cần học cách tận hưởng niềm vui, tập cười nhiều hơn để có được sự cân bằng thiết yếu cho tinh thần.\nMột số người sẽ bị tham vọng quá mức, đặc biệt nếu Con số chủ đạo của họ cũng là 9. Nếu tham vọng này không được định hướng tốt, nó sẽ dẫn đến sự thất vọng và kéo theo nhiều bất ổn trong đời sống.\nNgười có Con số ngày sinh là số 9 nên cẩn thận tránh những cuộc cãi vã nghiêm trọng, bởi tính nghiêm túc quá mức dễ khiến họ trở nên quá quyết liệt và mất khả năng thấu hiểu lý lẽ. Họ nên học diễn đạt các quan điểm khác nhau một cách bình đẳng thay vì áp chế người khác. "
    },{
        chiso: 10,
        title: "Dễ thích nghi, dễ hòa nhập. \nNhiệt tình, đầy năng lượng, dễ tính, vì thế cũng quảng giao, vui vẻ, có nhiều bạn bè, người quen thông qua các cuộc trò chuyện xã giao. Nhưng những người này cẩn thận tránh khuynh hướng “thảo mai” vì điều này sẽ cản trở họ có những tình bạn sâu sắc thực sự, đồng thời khiến họ không hiểu bản thân đủ sâu sắc để đạt được mục đích sống chân chính của họ ở đời.\nBằng cách tỏ ra rộng rãi cả về thời gian, năng lượng và/hoặc tiền bạc, họ có thể trở thành tâm điểm chú ý trong một thời gian, nhưng cách này sớm muộn sẽ khiến họ trở thành những cái bị rỗng không. Vì vậy, những người có Con số ngày sinh 10 nên có ý thức sử dụng nguồn lực của mình để phát triển mục đích quan trọng nhất của họ ở đời, tùy theo Con số chủ đạo của họ chỉ ra."
    },  {
        chiso: 11,
        title: "Trực giác cực kỳ phát triển, một biểu hiện của tần số tâm linh cao của Con số chủ đạo 11 được thể hiện ở Con số ngày sinh. Điều này hoàn toàn có thể trở thành trợ thủ đắc lực cho họ trên đường đời, giúp họ thấu hiểu cuộc sống, thấu hiểu con người. Tuy nhiên, khả năng này chỉ có thể xảy ra nếu họ không bị rơi vào tình trạng cảm xúc cực đoan, lên xuống thất thường.\nNhưng thật không may, những người có Con số ngày sinh 11 lại cực kỳ dễ có cao trào cảm xúc, thậm chí cảm xúc thường bị đẩy đến cực điểm, khiến họ có vẻ rất “thất thường”, dễ bồn chồn hoặc có diễn biến tâm trạng khó lường. Những cảm xúc “quá mức” như thế này dễ gây ra tình trạng cạn năng lượng và có hại cho sức khỏe thể chất cũng như tinh thần.\nNhững cảm xúc hỉ nộ khó lường này cần được nhận ra càng sớm càng tốt. Sau đó, với sự kiểm soát đúng mực, chúng sẽ dễ dàng trở thành những dấu hiệu dẫn dắt tâm linh đầy tích cực. Bằng cách này, trực giác của người có Con số ngày sinh 11 có thể phát triển tới đỉnh cao trong hành trình khám phá cuộc sống."
    }, {
        chiso: 22,
        title: "Không có con số nào có thể bì được với năng lượng tiềm ẩn của 22/4, vì nó kết hợp được trực giác với óc thực tế, từ đó khiến cho mọi khả năng đều có thể trở thành hiện thực – tất nhiên là nếu người sở hữu con số ngày sinh này thật sự mong muốn.\nThế nhưng, điều này chỉ khả thi nếu họ có khả năng đạt được sự hòa hợp toàn diện của cả ba yếu tố: Thể chất, Tinh thần và Trí não. Nếu không, sức mạnh này sẽ bị sử dụng thiên lệch một cách đáng tiếc, bị thúc đẩy bởi tham vọng sử dụng sức mạnh chỉ để kiểm soát mọi thứ. \nNiềm tin sai lệch này sẽ chỉ khiến họ đánh mất năng lượng cùng các nguồn lực; và sự thất bại, tổn thất cùng những vết thương thể chất hay tinh thần do điều này gây ra sẽ là những ví dụ để chứng minh rằng Con số ngày sinh chỉ mang giá trị phụ trợ cho Con số chủ đạo và không thể trở thành mục tiêu lớn nhất để bạn theo đuổi trong cuộc đời này được."
    },
]

export {arrayNoiTam,arrayNgaySinh,arrayDinhMenh,arrayThaiDo,arrayDuongDoi,arrayNoiCam}