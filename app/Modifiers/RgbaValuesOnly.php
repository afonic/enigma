<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;

class RgbaValuesOnly extends Modifier
{
    /**
     * Modify a value.
     *
     * @param mixed  $value    The value to be modified
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return mixed
     */
    public function index($value, $params, $context)
    {
        preg_match_all('~\(([^()]*)\)~', $value, $matches);
        return preg_replace('/,[^,]*$/', '', $matches[1][0]);
    }
}
