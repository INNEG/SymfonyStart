<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Dac\GraficoBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class GraphicController extends Controller
{
    
    public function indexAction()
    {
        $number = rand(1, 10);
        return $this->render(
            'GraficoBundle:Graphic:index.html.twig',
            array('number' => $number)
        );
    }
}