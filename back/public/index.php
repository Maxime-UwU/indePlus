<?php

use App\FlySymfonyRuntime;

require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

return function (array $context) {
    return new FlySymfonyRuntime($context);
};
