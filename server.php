
<?php
    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['user-street'];
    $home = $_POST['user-home'];
    $building = $_POST['user-building'];
    $apartment = $_POST['user-apartment'];
    $floor = $_POST['user-floor'];
    $message = $_POST['message'];
    $pay = $_POST['pay-radio'];

    $call = $_POST['user-call']; // 1 или null
    $call = isset($call) ? 'НЕТ' : 'ДА';


    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя:' . $name . '</li>
                <li>Email: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $home . '</li>
                <li>Корпус: ' . $building . '</li>
                <li>Квартира: ' . $apartment . '</li>
                <li>Этаж: ' . $floor . '</li>
                <li>Комментарий: ' . $message . '</li>
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $call . '</li>
            </ul>
        </body>
    </html>';

    $headers = "From: Администратор сайта <admin@gaponovd.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('GaponoffD@yandex.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

    // if ($mail) {
    //    echo 'done';
    // }else{
    //     echo 'error';
    // }

?>