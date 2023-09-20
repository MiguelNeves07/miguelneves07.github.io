<?php
// Substitua 'SUA_CHAVE_DE_API' pela sua chave de API real
$apiKey = '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';

error_reporting(E_ALL);
ini_set('display_errors', 1);


// Ler a mensagem do usuário da solicitação POST
$input = json_decode(file_get_contents('php://input'), true);
$userMessage = $input['message'];

// Configurar a chamada à API do ChatGPT
$apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
$data = [
    'prompt' => $userMessage,
    'max_tokens' => 50, // Ajuste o número máximo de tokens conforme necessário
];

$options = [
    'http' => [
        'header' => "Content-Type: application/json\r\n",
        'method' => 'POST',
        'content' => json_encode($data),
    ],
];

$context = stream_context_create($options);

// Fazer a chamada à API
$response = file_get_contents($apiUrl, false, $context);

// Retornar a resposta da API como JSON
echo $response;
?>
